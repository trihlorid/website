import { useCallback, useEffect, useRef, useState } from 'react';

export function useAsync<T extends {}, E = string>(
  asyncFunction: () => Promise<T>,
  cacheTime: number = 600000,
  immediate = true,
) {
  const [loading, setStatus] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);
  const cachedRef = useRef(false);
  const execute = useCallback(() => {
    if (!cachedRef.current) {
      setStatus(true);
      setData(null);
      setError(null);
      cachedRef.current = true;
      return asyncFunction()
        .then((response: T) => {
          setData(response);
          setStatus(false);
        })
        .catch((error: E) => {
          setError(error);
          setStatus(false);
          cachedRef.current = false;
        })
        .finally(() => {
          if (cachedRef.current) {
            setTimeout(() => {
              cachedRef.current = false;
            }, cacheTime);
          }
        });
    }
  }, [asyncFunction, cacheTime, cachedRef]);
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, loading, data, error };
}
