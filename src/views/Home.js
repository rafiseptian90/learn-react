import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogLists from "../components/BlogLists";

function Home(){
    const [lists, setLists] = useState([]);

    // use effect will call when the state is changes, the second param will counter it
    useEffect(() => {
        // get data from json placeholder
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => {
                setLists(data.slice(0, 5))
            })
    }, []);

    function deletePost(id){
        setLists(lists.filter(list => list.id !== id))
    }

    return(
        <div className="container px-14 py-7">
            <h1 className="text-gray-800 text-3xl mb-5">
                Homepage
            </h1>

            <hr className="mb-7"/>

            <BlogLists lists={ lists } delete={ deletePost }/>
        </div>
    )
}

export default Home;