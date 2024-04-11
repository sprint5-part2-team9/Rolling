import { useState, useEffect, useCallback } from "react";


function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(url);
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
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, isError };
}

export default useFetch;
