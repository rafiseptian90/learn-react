import { useParams } from 'react-router-dom'

const BLogDetail = () => {
    const { id } = useParams()

    return(
        <div className="container px-12 py-14">
            <h1 className="text-2xl font-semibold text-gray-600">Blog Detail - { id }</h1>
        </div>
    )
}

export default BLogDetail