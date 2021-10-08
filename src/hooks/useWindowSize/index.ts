import { useEffect, useState } from "react";

export type WindowSize = {
  windowHeight: number;
};

function useWindowSize(): WindowSize {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const { innerHeight } = window;

      setWindowHeight(innerHeight);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowHeight };
}

export default useWindowSize;
