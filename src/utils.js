export const formatData = data => {
  let panelColumns = [];

  data.forEach((panel, i) => {
    const beforeLastColumn = panelColumns?.[panelColumns.length - 2] || [];

    const beforeLastColumnSplitsQty = beforeLastColumn.reduce(
      (acc, { split }) => split.length + acc,
      0
    );

    const beforeLastColumnSplitsNextIds =
      beforeLastColumn?.reduce(
        (acc, { split }) => [
          ...acc,
          ...split.map(({ nextStopId }) => nextStopId),
        ],
        []
      ) || [];

    if (
      beforeLastColumnSplitsQty &&
      beforeLastColumnSplitsNextIds.includes(panel.id)
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
