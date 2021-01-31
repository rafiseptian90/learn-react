import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav id="navbar" className="bg-green-500 text-gray-100 grid grid-cols-2 items-center px-14 py-5">
            <Link to="/" className="brand text-2xl font-semibold justify-self-start">
                Rshme Blog
            </Link>
            <ul className="nav-ul list-none justify-self-end font-medium text-lg">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/create" className="nav-link">
                        New post
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;