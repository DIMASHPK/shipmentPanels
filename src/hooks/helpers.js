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

export const getTarget = i => {
  if (!i) {
    return "right";
  }

  return "left";
};

export const findLast = (arr, callback) => arr.slice().reverse().find(callback);
