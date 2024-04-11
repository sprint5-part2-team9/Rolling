import { useState, useEffect, useCallback } from 'react';

function useApi(apiFunction, apiParameter) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const apiData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await apiFunction(apiParameter);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [apiFunction, apiParameter]);

  useEffect(() => {
    apiData();
  }, [apiData]);

  return { data, isLoading, isError };
}

export default useApi;
