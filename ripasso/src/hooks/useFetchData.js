import { useEffect, useState } from "react";

const DEFAULT_OPTIONS = { method: "GET", headers: {} , body: {}};

export const useFetchData = (url, options = DEFAULT_OPTIONS) => {
    options = { ...DEFAULT_OPTIONS, ...options };

    const [data, setData] = useState(null); 
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const update = async () => {
        if(error != null) setError(null);
        if(loading == false) setLoading(true);

        try {
            if(options.method === "GET") {
                delete options.body;
            } 

            const response = await fetch(url, options);
            const result = await response.json();
            
            if(response.ok) {
                setData(result);
            } else {
                setError("Error during data fetching");
            }

        } catch(err) {
            console.log(err);
            setError("Server generic error occured");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        update();
    }, [url]) 

    return{
        data, error, loading, update
    }
} 