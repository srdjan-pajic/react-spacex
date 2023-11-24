import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Failed to fetch')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });
    }, [url])

    return { data, isPending, error };
}
// const useFetch = (url, offset) => {
//     const [data, setData] = useState([]);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);
//     const [lastFetchedOffset, setLastFetchedOffset] = useState(null);


//     useEffect(() => {
//         if (offset === lastFetchedOffset) {
//             return;
//         }
//         setLastFetchedOffset(offset);

//         fetch(url)
//             .then(res => {
//                 if (!res.ok) {
//                     throw Error('Failed to fetch')
//                 }
//                 return res.json();
//             })
//             .then(newData => {
//                 setData(prevData => [...prevData, ...newData]);
//                 setIsPending(false);
//                 setError(null);
//             })
//             .catch(err => {
//                 setIsPending(false);
//                 setError(err.message);
//             });
//     }, [url])

//     return { data, isPending, error };
// }

export default useFetch;