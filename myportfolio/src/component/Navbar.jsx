import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Navbar() {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: "home", path: "/" },
        
        { id: 3, link: "projects", path: "/projects" },
        
        { id: 5, link: "certificate", path: "/certificate" },
        { id: 6, link: "contact", path: "/contact" },
        { id: 7, link: "about", path: "/about" },
    ];

    return (
        <>
            <div className="flex justify-between items-center w-full h-16 text-white bg-gradient-to-b from-black to-gray-800 px-4 fixed z-50">
                <div className="text-2xl font-signature text-blue-300" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    Zeeshan Nawaz
                </div>
                <ul className="hidden md:flex">
                    {links.map(({ id, link, path }) => (
                        <li key={id} className="cursor-pointer capitalize px-4 text-gray-500 hover:scale-105 duration-200">
                            <Link to={path} onClick={() => setNav(false)}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div 
                    onClick={() => setNav(!nav)} 
                    className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                    aria-expanded={nav}
                    aria-label={nav ? "Close menu" : "Open menu"}
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

         
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link, path }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            <Link to={path} onClick={() => setNav(false)}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Navbar;
