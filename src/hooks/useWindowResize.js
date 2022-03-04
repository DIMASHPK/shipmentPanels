import { useState, useLayoutEffect } from "react";

export const useWindowResize = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const eventHandler = () => {
      const windowWidth = Math.min(window.screen.availWidth, window.innerWidth);

      setWidth(windowWidth);
    };

    window.addEventListener("resize", eventHandler);
    eventHandler();

    return () => {
      window.removeEventListener("resize", eventHandler);
    };
  }, []);

  return { width };
};
