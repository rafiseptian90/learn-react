import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogLists from "../components/BlogLists";

function Home(){
    const [posts, setPosts] = useState(null);

    // use effect will call when the state is changes, the second param will counter it
    useEffect(() => {
        // get data from json server
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => setPosts(data))
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
                /* conditional rendering */
                posts && <BlogLists posts={ posts } delete={ deletePost }/>
            }
        </div>
    )
}

export default Home;