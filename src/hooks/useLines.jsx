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
} from "./helpers";

const useLines = ({ windowWidth }) => {
  const ref = useRef();

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
          item.dataset.nextstopid
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

  const renderMainLines = useCallback(
    root => {
      const panelNodes = getPanelNodes(root);

      const nodeRelativeCoords = getNodeRelativeCoords(root);

      const panelsArrowsPositions = [];
      const splitArrowsPositions = [];
      const splitPanelArrowsPositions = [];

      const handleForEach = panelNode => {
        const nextItem = findByNextId(panelNodes, panelNode.dataset.nextstopid);

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

        setLineDataToArray(panelsArrowsPositions, {
          lineMeasurements,
          triangleMeasurements,
          stroke: getDataSetStrokeColor(panelNode),
        });
      };

      panelNodes.forEach(handleForEach);

      return [
        ...panelsArrowsPositions,
        ...splitArrowsPositions,
        ...splitPanelArrowsPositions,
      ];
    },
    [setSplitFromPanelLineData, setSplitToPanelLineData, windowWidth]
  );

  useLayoutEffect(() => {
    if (ref?.current) {
      const { current } = ref;

      setPanelLines([...renderMainLines(current)]);
    }
  }, [renderMainLines]);

  return { wrapperRef: ref, panelLines };
};

export default useLines;
