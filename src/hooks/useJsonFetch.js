import React, { useEffect, useState } from 'react';

export const useJsonFetch = (url, opts) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData(){
            setLoading(true)
            try{
                const response = await fetch(url, opts)
                if (!response.ok){
                    setError(response.statusText)
                } else {
                    const data = await response.json();
                    setData(data)
                    setError(null)
                }
            } finally{
                setLoading(false)
            }
            
        }

        fetchData(url, opts)
    }, [url]);
    
    return [{data, loading, error}]
}


