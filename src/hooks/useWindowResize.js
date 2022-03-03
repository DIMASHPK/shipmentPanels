import { useState, useLayoutEffect } from "react";

export const useWindowResize = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const eventHandler = () => {
      setWidth(window.screen.availWidth);
    };

    window.addEventListener("resize", eventHandler);
    eventHandler();

    return () => {
      window.removeEventListener("resize", eventHandler);
    };
  }, []);

  return { width };
};
