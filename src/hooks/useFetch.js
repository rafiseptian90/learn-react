import { useState, useEffect } from 'react';

const useFetch = (url) => {
    // define state
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // use effect will call when the state is changes, the second param will counter it
    useEffect(() => {
        // abort fetch when its running but user change the page
        const abort = new AbortController()

        // get data from json server
        setTimeout(() => {
            // add signal params
            fetch(url, { signal: abort.signal })
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
                    // don't update state if its aborted
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted')
                    }
                    // update state if isn't aborted
                    else{
                        setIsLoading(false)
                        setError(err.message)
                    }
                })
        }, 2000)

        // return when aborted
        return () => abort.abort()
    }, [url]);


    function deletePost(id){
        setData(data.filter(list => list.id !== id))
    }

    // return usable state
    return { data, isLoading, error, deletePost}
}

export default useFetch;