import { useState } from 'react';

const Navbar = () => {
    return(
        <nav id="navbar" className="bg-green-500 text-gray-100 grid grid-cols-2 items-center px-14 py-5">
            <a href="" className="brand text-2xl font-semibold justify-self-start">
                Rshme Blog
            </a>
            <ul className="nav-ul list-none justify-self-end font-medium text-lg">
                <li className="nav-item">
                    <a href="" className="nav-link">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                        Article
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                        About Us
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;