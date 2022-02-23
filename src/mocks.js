export const EDGE_STYLES = {
  GREEN: "green",
  GREY: "grey",
};

export const STATUSES = {
  DEPARTED: "Departed",
  ARRIVED: "Arrived",
  PARTIAL_ARRIVED: "Partial Arrived",
};

const VERY_COMPLEX_EXAMPLE = [
  {
    id: 1,
    airport: "1",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: 2,
    split: [],
  },
  {
    id: 2,
    airport: "2",
    mlsStatus: STATUSES.DEPARTED,
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
    airport: "3",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: null,
    pieces: 5,
    carrierCode: "AA",
    flightNumber: "1255",
    milestoneTime: "16 Dec 22:35",
    milestoneTimePostfix: "S",
    split: [
      {
        id: 6,
        nextStopId: 11,
        carrierCode: "AA",
        flightNumber: "1255",
        milestoneTime: "16 Dec 22:35",
        milestoneTimePostfix: "S",
      },
      {
        id: 7,
        nextStopId: 14,
        carrierCode: "AA",
        flightNumber: "1255",
        milestoneTime: "16 Dec 22:35",
        milestoneTimePostfix: "S",
      },
    ],
  },
  {
    id: 8,
    airport: "4",
    mlsStatus: STATUSES.ARRIVED,
    nextStopId: null,
    split: [
      {
        id: 9,
        nextStopId: 17,
      },
      {
        id: 10,
        nextStopId: 20,
      },
    ],
  },
  {
    id: 11,
    airport: "5",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: null,
    split: [
      {
        id: 12,
        nextStopId: 23,
      },
      {
        id: 13,
        nextStopId: 24,
      },
    ],
  },
  {
    id: 14,
    airport: "6",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 15,
    split: [
      {
        id: 15,
        nextStopId: 25,
      },
      {
        id: 16,
        nextStopId: 26,
      },
    ],
  },
  {
    id: 17,
    airport: "7",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 15,
    split: [
      {
        id: 18,
        nextStopId: 27,
      },
      {
        id: 19,
        nextStopId: 28,
      },
    ],
  },
  {
    id: 20,
    airport: "8",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 15,
    split: [
      {
        id: 21,
        nextStopId: 29,
      },
      {
        id: 22,
        nextStopId: 30,
      },
    ],
  },
  {
    id: 23,
    airport: "9",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 31,
    split: [],
  },
  {
    id: 24,
    airport: "10",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 31,
    split: [],
  },
  {
    id: 25,
    airport: "11",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 31,
    split: [],
  },
  {
    id: 26,
    airport: "12",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 31,
    split: [],
  },
  {
    id: 27,
    airport: "13",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 31,
    split: [],
  },
  {
    id: 28,
    airport: "14",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 31,
    split: [],
  },
  {
    id: 29,
    airport: "15",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 31,
    split: [],
  },
  {
    id: 30,
    airport: "16",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: 31,
    split: [],
  },
  {
    id: 31,
    airport: "17",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: null,
    split: [],
  },
];

const COMPLEX_EXAMPLE_SCREEN = [
  {
    id: 1,
    airport: "1",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: 2,
    split: [],
  },
  {
    id: 2,
    airport: "2",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: null,
    split: [
      {
        id: 3,
        nextStopId: 5,
      },
      {
        id: 4,
        nextStopId: 6,
      },
    ],
  },
  {
    id: 5,
    airport: "3",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: 7,
    pieces: 5,
    carrierCode: "AA",
    flightNumber: "1255",
    milestoneTime: "16 Dec 22:35",
    milestoneTimePostfix: "S",
    split: [],
  },
  {
    id: 6,
    airport: "4",
    mlsStatus: STATUSES.ARRIVED,
    nextStopId: 7,
    split: [],
  },
  {
    id: 7,
    airport: "5",
    mlsStatus: STATUSES.PARTIAL_ARRIVED,
    nextStopId: null,
    split: [],
  },
];

const MEDIUM_EXAMPLE_SCREEN = [
  {
    id: 1,
    airport: "1",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: 2,
    split: [],
  },
  {
    id: 2,
    airport: "2",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: 3,
    split: [],
  },
  {
    id: 3,
    airport: "3",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: 7,
    pieces: 5,
    carrierCode: "AA",
    flightNumber: "1255",
    milestoneTime: "16 Dec 22:35",
    milestoneTimePostfix: "S",
    split: [],
  },
];

const EASY_EXAMPLE_SCREEN = [
  {
    id: 1,
    airport: "1",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: 2,
    split: [],
  },
  {
    id: 2,
    airport: "2",
    mlsStatus: STATUSES.DEPARTED,
    nextStopId: 3,
    split: [],
  },
];

export const DATA = VERY_COMPLEX_EXAMPLE;

//Example of full response
/* const fullResponse = [
  {
    split: 1,
    pieces: 100,
    airport: "DXB",
    transitStations: {
      numberOfFlights: 3,
      stops: ["DXB"],
    },
    status: "Delivered",
    splitDetails: [
      {
        id: 1,
        airport: "DXB",
        mlsStatus: "Departed",
        nextStopId: 2,
        pieces: 5,
        carrierCode: "AA",
        flightNumber: "1255",
        milestoneTime: "16 Dec 22:35",
        milestoneTimePostfix: "S",
        split: [],
      },
      {
        id: 2,
        airport: "BOM",
        mlsStatus: "Departed",
        nextStopId: null,
        pieces: 5,
        carrierCode: "AA",
        flightNumber: "1255",
        milestoneTime: "16 Dec 22:35",
        milestoneTimePostfix: "S",
        split: [
          {
            id: 6,
            nextStopId: 11,
            carrierCode: "AA",
            flightNumber: "1255",
            milestoneTime: "16 Dec 22:35",
            milestoneTimePostfix: "S",
          },
          {
            id: 7,
            nextStopId: 14,
            carrierCode: "AA",
            flightNumber: "1255",
            milestoneTime: "16 Dec 22:35",
            milestoneTimePostfix: "S",
          },
        ],
      },
    ],
  },
]; */
