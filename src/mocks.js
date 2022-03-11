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
    itemId: 1,
    nextItemId: 2,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.DEPARTED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "S",
    pieces: 100,
    carrierCode: "AA",
    flightNumber: "1255",
    subSplits: [],
  },
  {
    itemId: 2,
    nextItemId: null,
    originAirportCode: "DXB",
    milestoneStatus: STATUSES.DEPARTED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 278,
    carrierCode: "AA",
    flightNumber: "1222",
    subSplits: [
      {
        itemId: 3,
        nextItemId: 5,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 200,
        carrierCode: "AA",
        flightNumber: "1222",
        subSplits: [],
      },
      {
        itemId: 4,
        nextItemId: 8,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
    ],
  },
  {
    itemId: 5,
    nextItemId: null,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.DEPARTED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    subSplits: [
      {
        itemId: 6,
        nextItemId: 11,
        originAirportCode: "BOM",
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        milestoneStatus: null,
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
      {
        itemId: 7,
        nextItemId: 14,
        originAirportCode: "BOM",
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        milestoneStatus: null,
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
    ],
  },
  {
    itemId: 8,
    nextItemId: null,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    subSplits: [
      {
        itemId: 9,
        nextItemId: 17,
        originAirportCode: "BOM",
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        milestoneStatus: null,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
      {
        itemId: 10,
        nextItemId: 20,
        originAirportCode: "BOM",
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        milestoneStatus: null,
        subSplits: [],
      },
    ],
  },
  {
    itemId: 11,
    nextItemId: null,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.PARTIAL_ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    subSplits: [
      {
        itemId: 12,
        nextItemId: 23,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
      {
        itemId: 13,
        nextItemId: 24,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
    ],
  },
  {
    itemId: 14,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.DEPARTED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: null,
    subSplits: [
      {
        itemId: 15,
        nextItemId: 25,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
      {
        itemId: 16,
        nextItemId: 26,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
    ],
  },
  {
    itemId: 17,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.DEPARTED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: null,
    subSplits: [
      {
        itemId: 18,
        nextItemId: 27,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
      {
        itemId: 19,
        nextItemId: 28,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
    ],
  },
  {
    itemId: 20,
    nextItemId: null,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    subSplits: [
      {
        itemId: 21,
        nextItemId: 29,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
      {
        itemId: 22,
        nextItemId: 30,
        originAirportCode: "BOM",
        milestoneStatus: null,
        milestoneTime: "2018-06-30 07:30:57",
        milestoneTimePostfix: "A",
        pieces: 78,
        carrierCode: "AA",
        flightNumber: "1200",
        subSplits: [],
      },
    ],
  },
  {
    itemId: 23,
    nextItemId: 31,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    subSplits: [],
  },
  {
    itemId: 24,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: 31,
    subSplits: [],
  },
  {
    itemId: 25,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: 31,
    subSplits: [],
  },
  {
    itemId: 26,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: 31,
    subSplits: [],
  },
  {
    itemId: 27,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: 31,
    subSplits: [],
  },
  {
    itemId: 28,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: 31,
    subSplits: [],
  },
  {
    itemId: 29,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: 31,
    subSplits: [],
  },
  {
    itemId: 30,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: 31,
    subSplits: [],
  },
  {
    itemId: 31,
    originAirportCode: "BOM",
    milestoneStatus: STATUSES.ARRIVED,
    milestoneTime: "2018-06-30 07:30:57",
    milestoneTimePostfix: "A",
    pieces: 78,
    carrierCode: "AA",
    flightNumber: "1200",
    nextItemId: null,
    subSplits: [],
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
export const FULL_RESPONSE = [
  {
    splitNumber: 1,
    pieces: 100,
    milestoneStatus: "Delivered",
    transitStations: {
      numberOfFlights: 2,
      stops: ["DXB"],
    },
    splitDetails: VERY_COMPLEX_EXAMPLE,
  },
  {
    splitNumber: 2,
    pieces: 278,
    milestoneStatus: "In progress",
    transitStations: {
      numberOfFlights: 5,
      stops: ["DXB", "CDG", "MUC"],
    },
    splitDetails: VERY_COMPLEX_EXAMPLE,
  },
];
