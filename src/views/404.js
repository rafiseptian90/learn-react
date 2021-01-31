import { useHistory, Link } from 'react-router-dom';

export const NotFound = () => {
    const history = useHistory()

    // styles
    const transform = {
        transform: 'translate(-50%, -50%)'
    }
    return(
        <div className="content absolute left-1/2 top-1/2 w-1/3" style={transform}>
            <h1 className="text-3xl text-red-600 text-center">
                Oops, we cannot find this page
            </h1>
            <div className="flex justify-center">
                <Link to="/" className="text-center mt-5 text-blue-800">Back to home page</Link>
            </div>
        </div>
    )
}