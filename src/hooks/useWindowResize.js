import { useState, useLayoutEffect } from "react";

export const useWindowResize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const eventHandler = () => {
      const windowWidth = Math.min(window.screen.availWidth, window.innerWidth);
      const windowHeight = Math.min(
        window.screen.availHeight,
        window.innerHeight
      );

      setWidth(windowWidth);
      setHeight(windowHeight);
    };

    window.addEventListener("resize", eventHandler);
    eventHandler();

    return () => {
      window.removeEventListener("resize", eventHandler);
    };
  }, []);

  return { width, height };
};
