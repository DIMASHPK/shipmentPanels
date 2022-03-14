import React from "react";
import { useWindowResize } from "./useWindowResize";

export const useContainerResize = ({ ref }) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const { width: windowWidth, height: windowHeight } = useWindowResize();

  React.useLayoutEffect(() => {
    if (ref?.current) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;

      setWidth(width);
      setHeight(height);
    }
  }, [ref, windowWidth, windowHeight]);

  return { width, height };
};
