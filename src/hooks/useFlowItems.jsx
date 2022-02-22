import { useLayoutEffect, useRef, useState } from "react";
import { data } from "../mocks";

export const useFlowItems = (
  {
    gutters = { top: 20, left: 20, right: 55, bottom: 55 },
    panelWidth = 142,
    panelHeight = 123,
    splitHeight = 79,
  } = {
    gutters: { top: 20, left: 20, right: 55, bottom: 55 },
    panelWidth: 142,
    panelHeight: 123,
    splitHeight: 91,
  }
) => {
  const ref = useRef();
  const { bottom, right, top, left } = gutters;

  const findLast = (arr, callback) => arr.slice().reverse().find(callback);

  const getInitialData = () => {
    let nextYPosition;

    const getSource = i => {
      if (!i) {
        return "right";
      }

      return "left";
    };

    const getTarget = i => {
      if (!i || i !== data.length - 1) {
        return "right";
      }

      return "left";
    };

    const getPositionForSameColumnPanels = ({ findedSplit }) => {
      const { x } = findedSplit.position;

      const xpos = x + panelWidth + right;

      const panelWithSamePosition = elements.find(
        ({ position: { x: sameX } }) => sameX === xpos
      );

      const panelWithSameNextPosition = elements.find(
        ({ position: { x: sameX, y: sameY } }) =>
          sameX === xpos && nextYPosition === sameY
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

      if (panelWithSameNextPosition) {
        nextYPosition = nextYPosition + bottom + panelHeight;

        return {
          x: xpos,
          y: nextYPosition,
        };
      }

      if (panelWithSamePosition) {
        nextYPosition = panelWithSamePosition.position.y + bottom + panelHeight;

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

    let elements = [];

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
            sourcePosition: !i ? "top" : "right",
          },
        ];
      });
    };

    data.forEach((item, i) => {
      const { id, nextStopId, split, ...rest } = item;

      const initData = {
        type: "special",
        sourcePosition: getSource(i),
        targetPosition: getTarget(i),
      };

      const currentPanelPosition = getPanelPostion(id, i);

      elements = [
        ...elements,
        {
          id,
          data: { ...rest, type: "panel", split },
          position: currentPanelPosition,
          ...initData,
        },
      ];

      if (split?.length) {
        addPanelSplits({ split, currentPanelPosition, initData });
      }
    });

    console.log({ elements, data });

    return [...elements];
  };

  const items = getInitialData();

  return { wrapperRef: ref, items };
};
