import {
  getLineMeasurements,
  getTriangleMeasurements,
  getStrokeColor,
} from "../helpers";

it("test getTriangleMeasurements() function output", () => {
  const windowWidth = 1237;
  const lineMeasurements = {
    x: 158,
    y: 69.5,
    points: [0, 0, 20, 0, 20, 0, 508, 0],
  };
  const output = {
    x: 661,
    y: 64.5,
    points: [0, 0, 5, 5, 0, 10],
  };
  expect(getTriangleMeasurements(lineMeasurements, windowWidth)).toEqual(
    output
  );
});

it("test getLineMeasurements output", () => {
  const sourceNodeMeasurements = {
    height: 107,
    width: 142,
    relativeX: 16,
    relativeY: 16,
    relativeRight: 158,
  };
  const targetNodeMeasurements = {
    height: 107,
    width: 142,
    relativeX: 666,
    relativeY: 16,
  };
  const windowWidth = 1237;
  const output = {
    x: 158,
    y: 69.5,
    points: [0, 0, 20, 0, 20, 0, 508, 0],
  };

  expect(
    getLineMeasurements(
      sourceNodeMeasurements,
      targetNodeMeasurements,
      windowWidth
    )
  ).toEqual(output);
});

it("test getStrokeColor() function with currentSplitPanels as empty array", () => {
  const item = { subSplits: [], nextItemId: 2, milestoneStatus: "Departed" };

  expect(getStrokeColor(item)).toEqual("grey");
});

it("test getStrokeColor() function", () => {
  const item = { subSplits: [], nextItemId: 2, milestoneStatus: "Departed" };
  const currentSplitPanels = [
    {
      nextItemId: 2,
      itemId: 1,
      originAirportCode: "BOM",
      milestoneStatus: "Departed",
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
      milestoneStatus: "Departed",
      milestoneTime: "2018-06-30 07:30:57",
      milestoneTimePostfix: "A",
      pieces: 278,
      carrierCode: "AA",
      flightNumber: "1222",
      subSplits: [],
    },
  ];
  
  expect(getStrokeColor(item, currentSplitPanels)).toEqual("green");
});
