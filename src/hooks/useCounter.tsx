import { useCallback, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback((incrementBy: number = 1) => {
    setCount((count) => count + incrementBy);
  }, []);

  const decrement = useCallback((decrementBy: number = 1) => {
    setCount((count) => count - decrementBy);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
