'use clinet';
import { useCallback, useEffect, useState } from 'react';

function useDebouncedScroll(callback: (direction: 'up' | 'down') => void) {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      if (isScrolling) return;

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 800);

      if (e.deltaY > 0) {
        callback('down');
      } else {
        callback('up');
      }
    },
    [callback, isScrolling]
  );

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);

  return isScrolling;
}

export default useDebouncedScroll;

