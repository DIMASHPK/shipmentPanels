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

export const getPointsArray = (...data) => {
  const arr = [];

  /* data.forEach(item => {
    const lastArrayItem = arr[arr.length - 1];

    if (lastArrayItem && lastArrayItem.length < 2) {
      lastArrayItem.push(item);
      return;
    }

    arr.push([item]);
  }); */

  /* [...data]; */

  return [...data];
};

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
  targetNodeMeasurements
) => {
  const {
    height: sourceHeight,
    y: sourceY,
    right: sourceRight,
  } = sourceNodeMeasurements;
  const {
    x: targetX,
    height: targetHeight,
    y: targetY,
  } = targetNodeMeasurements;

  return {
    x: sourceRight - 8,
    y: sourceY + sourceHeight / 2,
    points: getPointsArray(
      0,
      0,
      20,
      0,
      20,
      sourceHeight / 2 - targetHeight / 2 + (targetY - sourceY),
      targetX - sourceRight,
      sourceHeight / 2 - targetHeight / 2 + (targetY - sourceY)
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

export const getTriangleMeasurements = lineMeasurements => {
  const { x: lineX, y: lineY, points: linePoints } = lineMeasurements;

  const x = lineX + linePoints[linePoints.length - 2] - 5;
  const y = lineY + linePoints[linePoints.length - 1] - 5;

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
