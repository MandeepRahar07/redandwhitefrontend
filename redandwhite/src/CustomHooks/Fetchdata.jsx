import React, { useEffect, useState } from 'react';

function useFetchDataFromUrl(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const res2 = await res.json();
                setData(res2);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [url]);

    return {data};
}

export default useFetchDataFromUrl;
