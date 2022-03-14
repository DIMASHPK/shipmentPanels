import { EDGE_STYLES, STATUSES } from "./mocks";

export const getPanelNodes = root =>
  [...root.childNodes]
    .map(item => [...item.childNodes])
    .flat()
    .map(item => item.childNodes[0]);

export const getPointsArray = (...data) => [...data];

export const getItemMeasurements = (
  node,
  [parentXOffset, parentYOffset] = [0, 0]
) => {
  const { left, top, height, width, right, bottom, x, y } =
    node.getBoundingClientRect();

  return {
    left,
    top,
    height,
    width,
    right,
    bottom,
    x,
    y,
    relativeX: x - parentXOffset,
    relativeY: y - parentYOffset,
    relativeLeft: x - parentXOffset,
    relativeTop: y - parentYOffset,
    relativeRight: x - parentXOffset + width,
    relativeBottom: y - parentYOffset + height,
  };
};

export const getNodeRelativeCoords = node => {
  const { x, y } = getItemMeasurements(node);
  return [x, y];
};

export const setLineDataToArray = (arr, data) => arr.push(data);

export const getLineMeasurements = (
  sourceNodeMeasurements,
  targetNodeMeasurements,
  windowWidth
) => {
  const {
    height: sourceHeight,
    relativeY: sourceY,
    relativeRight: sourceRight,
    relativeX: sourceX,
    width: sourceWidth,
  } = sourceNodeMeasurements;

  const {
    relativeX: targetX,
    height: targetHeight,
    relativeY: targetY,
    width: targetWidth,
  } = targetNodeMeasurements;

  if (windowWidth <= 991) {
    return {
      x: sourceX + sourceWidth / 2,
      y: sourceY + sourceHeight,
      points: getPointsArray(
        0,
        0,
        0,
        10,
        targetX + targetWidth / 2 - (sourceX + sourceWidth / 2),
        10,
        targetX + targetWidth / 2 - (sourceX + sourceWidth / 2),
        targetY - (sourceHeight + sourceY)
      ),
    };
  }

  return {
    x: sourceX + sourceWidth,
    y: sourceY + sourceHeight / 2,
    points: getPointsArray(
      0,
      0,
      20,
      0,
      20,
      targetHeight / 2 + targetY - (sourceY + sourceHeight / 2),
      targetX - sourceRight,
      targetHeight / 2 + targetY - (sourceY + sourceHeight / 2)
    ),
  };
};

export const getRelationshipItemMeasurements = (
  parentMeasurements,
  splitsWrapperMeasurements,
  nodeRelativeCoords
) => {
  const { relativeY: splitsWrapperY } = getItemMeasurements(
    splitsWrapperMeasurements,
    nodeRelativeCoords
  );
  const {
    width: parentWidth,
    relativeBottom: parentBottom,
    relativeX: parentX,
  } = getItemMeasurements(parentMeasurements, nodeRelativeCoords);

  return {
    x: parentX + parentWidth / 2,
    y: parentBottom,
    points: getPointsArray(0, 0, 0, splitsWrapperY - parentBottom - 1),
  };
};

export const getTriangleMeasurements = (lineMeasurements, windowWidth) => {
  const { x: lineX, y: lineY, points: linePoints } = lineMeasurements;

  const x = lineX + linePoints[linePoints.length - 2] - 5;
  const y = lineY + linePoints[linePoints.length - 1] - 5;

  if (windowWidth <= 991) {
    return {
      x,
      y,
      points: [0, 0, 5, 5, 10, 0],
    };
  }

  return {
    x,
    y,
    points: [0, 0, 5, 5, 0, 10],
  };
};

export const getRelationshipTriangleMeasurements = lineMeasurements => {
  const { x: lineX, y: lineY, points: linePoints } = lineMeasurements;

  const x = lineX + linePoints[linePoints.length - 2] - 5;
  const y = lineY + linePoints[linePoints.length - 1] - 5;

  return {
    x,
    y,
    points: [0, 0, 5, 5, 10, 0],
  };
};

export const findBy = (array, callback) => array.find(callback);

export const findByNextId = (array, nextItemId) =>
  findBy(array, ({ id }) => id === nextItemId);

export const getStrokeColor = (item, currentSplitPanels = []) => {
  const { subSplits, nextItemId, milestoneStatus } = item;

  const nextItem = currentSplitPanels.find(
    ({ itemId }) => itemId === nextItemId
  );

  if (
    (subSplits?.length && milestoneStatus === STATUSES.DEPARTED) ||
    nextItem?.milestoneStatus === STATUSES.DEPARTED
  ) {
    return EDGE_STYLES.GREEN;
  }

  return EDGE_STYLES.GREY;
};

export const getDataSetStrokeColor = node => node.dataset.strokecolor;

export const formatData = data => {
  let panelColumns = [];

  data.forEach((panel, i) => {
    const beforeLastColumn = panelColumns?.[panelColumns.length - 2] || [];

    const beforeLastColumnSplitsQty = beforeLastColumn.reduce(
      (acc, { subSplits }) => subSplits.length + acc,
      0
    );

    const beforeLastColumnSplitsNextIds =
      beforeLastColumn?.reduce(
        (acc, item) => [
          ...acc,
          ...item.subSplits.map(({ nextItemId }) => nextItemId),
        ],
        []
      ) || [];

    if (
      beforeLastColumnSplitsQty &&
      beforeLastColumnSplitsNextIds.includes(panel.itemId)
    ) {
      panelColumns = [
        ...panelColumns.map((item, i) =>
          i === panelColumns.length - 1 ? [...item, panel] : item
        ),
      ];

      return;
    }

    panelColumns = [...panelColumns, [panel]];
  });

  return panelColumns;
};
