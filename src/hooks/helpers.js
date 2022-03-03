import { DATA, EDGE_STYLES, STATUSES } from "../mocks";

export const getPanelNodes = root =>
  [...root.childNodes]
    .map(item => [...item.childNodes])
    .flat()
    .map(item => item.childNodes[0]);

export const getSource = (i, data, split) => {
  if (split.length) {
    return "bottom";
  }

  if (i === data.length - 1) {
    return "left";
  }

  if (!i) {
    return "right";
  }

  return "right";
};

export const getPointsArray = (...data) => [...data];

export const getTarget = i => {
  if (!i) {
    return "right";
  }

  return "left";
};

export const findLast = (arr, callback) => arr.slice().reverse().find(callback);

export const getItemMeasurements = node => node.getBoundingClientRect();

export const setLineDataToArray = (arr, data) => arr.push(data);

export const getLineMeasurements = (
  sourceNodeMeasurements,
  targetNodeMeasurements,
  windowWidth
) => {
  const {
    height: sourceHeight,
    y: sourceY,
    right: sourceRight,
    x: sourceX,
    width: sourceWidth,
  } = sourceNodeMeasurements;

  const {
    x: targetX,
    height: targetHeight,
    y: targetY,
  } = targetNodeMeasurements;

  const commonMeasurements = {
    x: sourceX + sourceWidth / 2 - 8,
    y: sourceY + sourceHeight - 8,
  };

  console.log({ windowWidth });

  if (windowWidth <= 991) {
    return {
      ...commonMeasurements,
      points: getPointsArray(
        0,
        0,
        0,
        10,
        targetX - sourceX,
        10,
        targetX - sourceX,
        targetY - (sourceHeight + sourceY)
      ),
    };
  }

  return {
    x: sourceRight - 8,
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
  splitsWrapperMeasurements
) => {
  const { y: splitsWrapperY } = getItemMeasurements(splitsWrapperMeasurements);
  const {
    width: parentWidth,
    bottom: parentBottom,

    x: parentX,
  } = getItemMeasurements(parentMeasurements);
  return {
    x: parentX + parentWidth / 2 - 8,
    y: parentBottom - 8,
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

export const findByNextId = (array, nextStopId) =>
  findBy(array, ({ id }) => id === nextStopId);

export const getStrokeColor = item => {
  const { split, nextStopId, mlsStatus } = item;

  const nextItem = DATA.find(({ id }) => id === nextStopId);

  if (
    (split?.length && mlsStatus === STATUSES.DEPARTED) ||
    nextItem?.mlsStatus === STATUSES.DEPARTED
  ) {
    return EDGE_STYLES.GREEN;
  }

  return EDGE_STYLES.GREY;
};

export const getDataSetStrokeColor = node => node.dataset.strokecolor;
