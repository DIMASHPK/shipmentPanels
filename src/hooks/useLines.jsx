import { useRef, useState, useLayoutEffect, useCallback } from "react";
import { getPanelNodes } from "./helpers";

const useLines = () => {
  const ref = useRef();

  const [panelLines, setPanelLines] = useState([]);

  const getPointsArray = (...data) => [...data];

  const setSplitLineData = ({ root, array, width, height, bottom, y, x }) => {
    const { y: splitY } = root.nextSibling.getBoundingClientRect();

    array.push({
      x: x + width / 2 - 8,
      y: y + height - 8,
      points: getPointsArray(0, 0, 0, splitY - bottom + 8),
    });
  };

  const setSplitPanelLineData = ({ root, splitPanelArrowsPositions }) => {
    const splitsArray = [...root.nextSibling.childNodes];

    splitsArray.forEach(item => {
      const {} = item.getBoundingClientRect();
    });
  };

  const renderMainLines = useCallback(root => {
    const panelNodes = getPanelNodes(root);

    const panelsArrowsPositions = [];
    const splitArrowsPositions = [];
    const splitPanelArrowsPositions = [];

    const handleForEach = panelNode => {
      const nextItem = panelNodes.find(
        nextItem => nextItem.id === panelNode.dataset.nextstopid
      );

      const { x, width, height, y, bottom, right } =
        panelNode.getBoundingClientRect();

      if (panelNode.dataset.withsplits === "true") {
        setSplitLineData({
          root: panelNode,
          width,
          height,
          bottom,
          y,
          x,
          array: splitArrowsPositions,
        });

        setSplitPanelLineData({
          root: panelNode,
          splitPanelArrowsPositions,
        });
      }

      if (!nextItem) return;

      const {
        x: nextX,
        height: nextHeight,
        y: nextY,
      } = nextItem.getBoundingClientRect();

      panelsArrowsPositions.push({
        x: right - 8,
        y: y + height / 2,
        points: getPointsArray(
          0,
          0,
          nextX - right,
          height / 2 - nextHeight / 2 + (nextY - y)
        ),
      });
    };

    panelNodes.forEach(handleForEach);

    return [
      ...panelsArrowsPositions,
      ...splitArrowsPositions,
      ...splitPanelArrowsPositions,
    ];
  }, []);

  useLayoutEffect(() => {
    if (ref?.current) {
      const { current } = ref;

      setPanelLines([...renderMainLines(current)]);
    }
  }, [renderMainLines]);

  return { wrapperRef: ref, panelLines };
};

export default useLines;
