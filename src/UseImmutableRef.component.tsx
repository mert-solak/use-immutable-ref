import { useCallback, useState } from 'react';

export const useImmutableRef = <T extends HTMLCanvasElement>(): [T | null, (element: T | null) => void] => {
  const [elementRef, setElementRef] = useState<T | null>(null);

  const setRef = useCallback((element: T | null) => {
    if (element === null || element === undefined) {
      setElementRef(null);
    } else {
      setElementRef(element);
    }
  }, []);

  return [elementRef, setRef];
};
