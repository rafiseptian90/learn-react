import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogLists from "../components/BlogLists";

function Home(){
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // use effect will call when the state is changes, the second param will counter it
    useEffect(() => {
        // get data from json server
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch data in this resource !')
                    }
                    return res.json()
                })
                .then(data => {
                    setPosts(data)
                    setIsLoading(false)
                })
                .catch(err => {
                    setIsLoading(false)
                    setError(err.message)
                })
        }, 2000)
    }, []);

    function deletePost(id){
        setPosts(posts.filter(list => list.id !== id))
    }

    return(
        <div className="container px-14 py-7">
            <h1 className="text-gray-800 text-3xl mb-5">
                Homepage
            </h1>

            <hr className="mb-7"/>
            {
                /* show error */
                error && <div className="text-lg text-center text-red-600">{ error }</div>
            }
            {
                /* show simple loading */
                isLoading && <div className="text-lg text-center">Loading...</div>
            }
            {
                /* conditional rendering */
                posts && <BlogLists posts={ posts } delete={ deletePost }/>
            }
        </div>
    )
}

export default Home;