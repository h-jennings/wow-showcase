import { useState, useEffect, useCallback } from 'react';

function useWindowSize() {
  const isClient = typeof window === 'object';

  const getSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient],
  );
  const [windowSize, setWindowSize] = useState(getSize);

  const handleResize = useCallback(
    () => {
      setWindowSize(getSize());
    },
    [getSize],
  );

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSize, handleResize, isClient]);


  return windowSize;
}

export default useWindowSize;
