import { useParams } from 'react-router-dom'
import useFetch from "../hooks/useFetch";

const BLogDetail = () => {
    const { id } = useParams()
    const { data: post, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`)

    return(
        <div className="container px-12 py-14">
            {
                /* show simple loading */
                isLoading && <div className="text-lg text-center">Loading...</div>
            }

            {
                post
                &&
                <div className="content">
                    <h1 className="text-2xl font-semibold text-gray-600 mb-3">{post.title}</h1>
                    <p className="text-base text-gray-700">
                        { post.body }
                    </p>
                    <span className="block italic font-light mt-5">
                        { post.author }
                    </span>
                </div>
            }
        </div>
    )
}

export default BLogDetail