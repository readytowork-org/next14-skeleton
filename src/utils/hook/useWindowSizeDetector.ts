"use client";

import { useEffect, useState } from "react";

const useWindowSizeDetector = () => {
  // default is set to 1024, this stops ui flickering issue in desktop
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 1024,
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    setLoading(false);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { height: windowSize.height, width: windowSize.width, isLoading };
};

export { useWindowSizeDetector };
