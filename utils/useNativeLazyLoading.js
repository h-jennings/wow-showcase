import { useEffect, useState, useRef } from 'react';


function useNativeLazyLoading() {
  const isSupportedRef = useRef();
  const [supported, setSupported] = useState(isSupportedRef.current);

  useEffect(() => {
    if (isSupportedRef.current === undefined) {
      // if image element has a 'loading' attribute (supports native lazy loading)
      // set 'supported' state to true

      isSupportedRef.current = 'loading' in HTMLImageElement.prototype;
      setSupported(isSupportedRef.current);
    }
  }, []);

  return supported;
}

export default useNativeLazyLoading;
