import BlogLists from "../components/BlogLists";
import useFetch from "../hooks/useFetch";

function Home(){
    let { data, isLoading, error, deletePost} = useFetch('http://localhost:8000/blogs')

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
                data && <BlogLists posts={ data } delete={ deletePost }/>
            }
        </div>
    )
}

export default Home;