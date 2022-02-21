export const getPanelNodes = root =>
  [...root.childNodes]
    .map(item => [...item.childNodes])
    .flat()
    .map(item => item.childNodes[0]);
