import { useState, useEffect } from 'react';

const useFetch = (url) => {
    // define state
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // use effect will call when the state is changes, the second param will counter it
    useEffect(() => {
        // get data from json server
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch data in this resource !')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsLoading(false)
                })
                .catch(err => {
                    setIsLoading(false)
                    setError(err.message)
                })
        }, 2000)
    }, [url]);


    function deletePost(id){
        setData(data.filter(list => list.id !== id))
    }

    // return usable state
    return { data, isLoading, error, deletePost}
}

export default useFetch;