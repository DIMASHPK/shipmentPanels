import { useRef, useState, useLayoutEffect, useCallback } from "react";
import {
  findByNextId,
  getItemMeasurements,
  getPanelNodes,
  setLineDataToArray,
  getLineMeasurements,
  getRelationshipItemMeasurements,
  getTriangleMeasurements,
  getRelationshipTriangleMeasurements,
  getDataSetStrokeColor,
  getNodeRelativeCoords,
} from "../helpers";
import { useWindowResize } from "./useWindowResize";

const useLines = () => {
  const ref = useRef();

  const { width: windowWidth } = useWindowResize();

  const [panelLines, setPanelLines] = useState([]);

  const setSplitFromPanelLineData = useCallback(
    ({ root, array, nodeRelativeCoords }) => {
      const lineMeasurements = getRelationshipItemMeasurements(
        root,
        root.nextSibling,
        nodeRelativeCoords
      );

      const triangleMeasurements =
        getRelationshipTriangleMeasurements(lineMeasurements);

      setLineDataToArray(array, {
        lineMeasurements,
        triangleMeasurements,
        stroke: getDataSetStrokeColor(root),
      });
    },
    []
  );

  const setSplitToPanelLineData = useCallback(
    ({ root, splitPanelArrowsPositions, panelNodes, nodeRelativeCoords }) => {
      const splitsArray = [...root.nextSibling.childNodes];

      splitsArray.forEach(item => {
        const sourceItem = getItemMeasurements(item, nodeRelativeCoords);

        const matchedPanelNode = findByNextId(
          panelNodes,
          item.dataset.nextitemid
        );

        const targetItem = getItemMeasurements(
          matchedPanelNode,
          nodeRelativeCoords
        );

        const lineMeasurements = getLineMeasurements(
          sourceItem,
          targetItem,
          windowWidth
        );
        const triangleMeasurements = getTriangleMeasurements(
          lineMeasurements,
          windowWidth
        );

        setLineDataToArray(splitPanelArrowsPositions, {
          lineMeasurements,
          triangleMeasurements,
          stroke: getDataSetStrokeColor(item),
        });
      });
    },
    [windowWidth]
  );

  const renderLines = useCallback(
    root => {
      const panelNodes = getPanelNodes(root);

      const nodeRelativeCoords = getNodeRelativeCoords(root.nextSibling);

      const panelArrowsPositions = [];
      const splitArrowsPositions = [];
      const splitPanelArrowsPositions = [];

      const handleForEach = panelNode => {
        const nextItem = findByNextId(panelNodes, panelNode.dataset.nextitemid);

        if (panelNode.dataset.withsplits === "true") {
          setSplitFromPanelLineData({
            root: panelNode,
            array: splitArrowsPositions,
            nodeRelativeCoords,
          });

          setSplitToPanelLineData({
            root: panelNode,
            splitPanelArrowsPositions,
            panelNodes,
            nodeRelativeCoords,
          });
        }

        if (!nextItem) return;

        const itemMeasurements = getItemMeasurements(
          panelNode,
          nodeRelativeCoords
        );
        const nextItemMeasurements = getItemMeasurements(
          nextItem,
          nodeRelativeCoords
        );

        const lineMeasurements = getLineMeasurements(
          itemMeasurements,
          nextItemMeasurements,
          windowWidth
        );

        const triangleMeasurements = getTriangleMeasurements(
          lineMeasurements,
          windowWidth
        );

        setLineDataToArray(panelArrowsPositions, {
          lineMeasurements,
          triangleMeasurements,
          stroke: getDataSetStrokeColor(panelNode),
        });
      };

      panelNodes.forEach(handleForEach);

      return [
        ...panelArrowsPositions,
        ...splitArrowsPositions,
        ...splitPanelArrowsPositions,
      ];
    },
    [setSplitFromPanelLineData, setSplitToPanelLineData, windowWidth]
  );

  useLayoutEffect(() => {
    if (ref?.current) {
      const { current } = ref;

      setPanelLines([...renderLines(current)]);
    }
  }, [renderLines]);

  return { wrapperRef: ref, panelLines };
};

export default useLines;
