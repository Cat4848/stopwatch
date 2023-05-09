import { useEffect } from "react";

export function useSeconds(counting, seconds, setSeconds) {

  useEffect(() => {
    if (counting) {
      const countId = setInterval(() => setSeconds(seconds + 1), 1000);
      return () => clearInterval(countId);

    }
  }, [counting, seconds, setSeconds])
}

