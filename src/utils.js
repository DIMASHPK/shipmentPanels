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
