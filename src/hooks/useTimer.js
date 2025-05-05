import { useState, useRef, useEffect } from "react";

export const useTimer = () => {
  const interval = useRef(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    if (interval.current !== null) return; // prevent multiple intervals
    interval.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (interval.current !== null) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  const resetTimer = () => {
    setTime(0);
  };

  // optional: clean up on unmount
  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return { time, startTimer, stopTimer, resetTimer };
};
