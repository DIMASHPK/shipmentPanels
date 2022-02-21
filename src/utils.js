export const formatData = data => {
  let newData = [];

  /* for (let i = 0; i < data.length; i++) {
    if (data[i].break) {
      continue;
    }

    const currentSplits = data[i]?.split;
    const array = [];

    newData.push([data[i]]);

    if (currentSplits?.length) {
      currentSplits.forEach((item, k) => {
        array.push(data[i + k + 1]);

        data[k + i + i].break = true;
      });

      newData.push(array);
    }
  } */

  data.forEach((item, i) => {
    if (item.break) {
      return;
    }

    const currentSplits = item?.split;
    const array = [];

    newData.push([item]);

    if (currentSplits?.length) {
      currentSplits.forEach((_, k) => {
        array.push(data[i + k + 1]);

        data[k + i + i].break = true;
      });

      newData.push(array);
    }
  });

  return newData;
};
