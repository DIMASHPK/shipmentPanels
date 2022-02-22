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
        nextStopId: 5,
      },
      {
        id: 4,
        nextStopId: 8,
      },
    ],
  },
  {
    id: 5,
    airport: "CDG",
    mlsStatus: "Departed",
    nextStopId: null,
    split: [
      {
        id: 6,
        nextStopId: 11,
      },
      {
        id: 7,
        nextStopId: 13,
      },
    ],
  },
  {
    id: 8,
    airport: "MUC",
    mlsStatus: "Arrived",
    nextStopId: null,
    split: [
      {
        id: 9,
        nextStopId: 15,
      },
      {
        id: 10,
        nextStopId: 17,
      },
    ],
  },
  {
    id: 11,
    airport: "FRA1",
    mlsStatus: "Partial Arrived",
    nextStopId: null,
    split: [
      {
        id: 12,
        nextStopId: 19,
      },
    ],
  },
  {
    id: 13,
    airport: "FRA2",
    mlsStatus: "Partial Arrived",
    nextStopId: 15,
    split: [
      {
        id: 14,
        nextStopId: 20,
      },
    ],
  },
  {
    id: 15,
    airport: "FRA3",
    mlsStatus: "Partial Arrived",
    nextStopId: 15,
    split: [
      {
        id: 16,
        nextStopId: 21,
      },
    ],
  },
  {
    id: 17,
    airport: "FRA4",
    mlsStatus: "Partial Arrived",
    nextStopId: 15,
    split: [
      {
        id: 18,
        nextStopId: 22,
      },
    ],
  },
  {
    id: 19,
    airport: "FRA5",
    mlsStatus: "Partial Arrived",
    nextStopId: 23,
    split: [],
  },
  {
    id: 20,
    airport: "FRA6",
    mlsStatus: "Partial Arrived",
    nextStopId: 23,
    split: [],
  },
  {
    id: 21,
    airport: "FRA7",
    mlsStatus: "Partial Arrived",
    nextStopId: 23,
    split: [],
  },
  {
    id: 22,
    airport: "FRA8",
    mlsStatus: "Partial Arrived",
    nextStopId: 23,
    split: [],
  },
  {
    id: 23,
    airport: "FRA9",
    mlsStatus: "Partial Arrived",
    nextStopId: null,
    split: [],
  },
];
