export const data = [
  {
    id: 1,
    airport: "BOM",
    mlsStatus: "Departed",
    nextStopId: 2,
    split: [],
  },
  {
    id: 2,
    airport: "DXB",
    mlsStatus: "Departed",
    nextStopId: null,
    split: [
      {
        id: 3,
        extStopId: 5,
      },
      {
        id: 4,
        extStopId: 6,
      },
    ],
  },
  {
    id: 5,
    airport: "CDG",
    mlsStatus: "Departed",
    nextStopId: 7,
    split: [],
  },
  {
    id: 6,
    airport: "MUC",
    mlsStatus: "Arrived",
    nextStopId: 7,
    split: [],
  },
  {
    id: 7,
    airport: "FRA",
    mlsStatus: "Partial Arrived",
    nextStopId: 8,
    split: [],
  },
];
