import { useState, useEffect } from "react";

export const useBreakpoint = (breakpoint: number = 768) => {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsAboveBreakpoint(window.innerWidth >= breakpoint);
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [breakpoint]);

  return isAboveBreakpoint;
};
