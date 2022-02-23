import { useRef } from "react";
import { DATA, STATUSES, EDGE_STYLES } from "../mocks";
import { getSource, getTarget, findLast } from "./helpers";

export const useFlowItems = (
  {
    gutters = { top: 20, left: 20, right: 55, bottom: 55 },
    panelWidth = 142,
    panelHeight = 123,
    splitHeight = 79,
  } = {
    gutters: { top: 20, left: 20, right: 70, bottom: 55 },
    panelWidth: 142,
    panelHeight: 123,
    splitHeight: 91,
  }
) => {
  const ref = useRef();
  const { bottom, right, top, left } = gutters;

  const getEdgeStylesMapping = style => {
    switch (style) {
      case EDGE_STYLES.GREEN: {
        return {
          data: {
            markerEndId: "react-flow__arrowclosed-green",
          },
          style: { strokeWidth: 3, stroke: "green" },
        };
      }
      default:
        return {
          data: {
            markerEndId: "react-flow__arrowclosed",
          },
          style: { strokeWidth: 3, stroke: "grey" },
        };
    }
  };

  const getInitialElements = () => {
    let elements = [];

    const getPositionForSameColumnPanels = ({ findedSplit }) => {
      const { x } = findedSplit.position;

      const xpos = x + panelWidth + right;

      const panelWithSamePosition = findLast(
        elements,
        ({ position: { x: sameX } }) => sameX === xpos
      );

      const panelSplits = panelWithSamePosition?.data?.split;
      const lastPanelSplit = panelSplits?.[panelSplits?.length - 1];

      if (lastPanelSplit) {
        const {
          position: { y },
        } = elements.find(({ id }) => id === lastPanelSplit.id);

        return {
          x: xpos,
          y: y + splitHeight + bottom,
        };
      }

      if (panelWithSamePosition) {
        return {
          x: xpos,
          y: panelWithSamePosition.position.y + bottom + panelHeight,
        };
      }

      return {
        x: xpos,
        y: top,
      };
    };

    const getPanelPostion = (id, i) => {
      const findedSplit = elements.find(
        ({ data: { nextStopId, type } }) =>
          nextStopId === id && type === "split"
      );

      if (findedSplit) {
        return getPositionForSameColumnPanels({ findedSplit });
      }

      const lastPanel = findLast(
        elements,
        ({ data: { type } }) => type === "panel"
      );

      if (lastPanel) {
        const { x } = lastPanel.position;
        return { x: x + panelWidth + right, y: top };
      }

      return { x: i * panelWidth + (i ? right * i : 0) + left, y: top };
    };

    const addPanelSplits = ({ split, currentPanelPosition, initData }) => {
      const { x, y } = currentPanelPosition;

      let prevSplitPosition = { x, y: y + panelHeight + bottom };

      split.forEach((item, i) => {
        prevSplitPosition.y = !i
          ? prevSplitPosition.y
          : prevSplitPosition.y + splitHeight - 10;

        elements = [
          ...elements,
          {
            id: item.id,
            data: { ...item, type: "split" },
            position: { ...prevSplitPosition },
            ...initData,
            targetPosition: !i ? "top" : "right",
            sourcePosition: "right",
          },
        ];
      });
    };

    const forEachHandler = (item, i) => {
      const { id, split, ...rest } = item;

      const initData = {
        type: "special",
        sourcePosition: getSource(i, DATA, split),
        targetPosition: getTarget(i),
      };

      const currentPanelPosition = getPanelPostion(id, i);

      elements = [
        ...elements,
        {
          id,
          data: { ...rest, type: "panel", split, id },
          position: currentPanelPosition,
          ...initData,
        },
      ];

      if (split?.length) {
        addPanelSplits({ split, currentPanelPosition, initData });
      }
    };

    DATA.forEach(forEachHandler);

    console.log({ elements, DATA });

    return [...elements];
  };

  const getEdgeStyleKey = item => {
    const {
      data: { split, nextStopId, mlsStatus },
    } = item;

    const nextItem = DATA.find(({ id }) => id === nextStopId);

    if (
      (split?.length && mlsStatus === STATUSES.DEPARTED) ||
      nextItem?.mlsStatus === STATUSES.DEPARTED
    ) {
      return EDGE_STYLES.GREEN;
    }

    return EDGE_STYLES.GREY;
  };

  const getInitialEdges = elements => {
    let edges = [];

    const forEachHandler = item => {
      const {
        data: { nextStopId, id, split },
      } = item;

      if (!nextStopId && !split?.length) {
        return;
      }

      const initData = {
        id: `${id}-${nextStopId}`,
        source: id,
        target: nextStopId,
        type: "custom" /* "straight" */ /* "step" */ /* "default" */ /* "smoothstep" */,
        arrowHeadType: "arrow" /* "arrowclosed" */,
        ...getEdgeStylesMapping(getEdgeStyleKey(item)),
      };

      if (split?.length) {
        initData.id = `${id}-${split[0].id}`;
        initData.target = split[0].id;
      }

      edges = [...edges, { ...initData }];
    };

    elements.forEach(forEachHandler);

    return edges;
  };

  const getInitialData = () => {
    const elements = getInitialElements();
    const edges = getInitialEdges(elements);

    return [...elements, ...edges];
  };

  const items = getInitialData();

  const getHeight = items => {
    const min = 0;
    let max;

    items.forEach(item => {
      if (item?.position?.y > max || !max) {
        max = item?.position?.y;
      }
    });

    return max - min + panelHeight + bottom;
  };

  const height = getHeight(items);

  return { wrapperRef: ref, items, height };
};
