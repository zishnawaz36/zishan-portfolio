import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { IoMdClose } from "react-icons/io"; // cross icon

const SocialLinks = () => {
    const [visible, setVisible] = useState(true);

    const links = [
        { id: 1, child: <>LinkedIn <FaLinkedin size={30} /></>, href: "https://www.linkedin.com/in/zeeshan-nawaz-99bb94241/" },
        { id: 2, child: <>GitHub <FaGithub size={30} /></>, href: "https://github.com/zishnawaz36" },
        { id: 3, child: <>Instagram <FaInstagram size={30} /></>, href: "https://www.instagram.com/zeeshan.nawaz__/" },
        { id: 4, child: <>Facebook <FaFacebook size={30} /></>, href: "https://facebook.com/" },
        { id: 5, child: <>Email <HiOutlineMail size={30} /></>, href: "mailto:zeeshannawaz.makaut.it@gmail.com" },
        { id: 6, child: <>Resume <BsFillPersonLinesFill size={30} /></>, href: "https://drive.google.com/file/d/1QaDRVxP_uCun9y7h9CpEALkK_WIkQEgg/view?usp=drive_link", download: true },
    ];

    if (!visible) return null;

    return (
        <div className="flex flex-col top-[35%] left-0 fixed lg:top-[50%]">
            {/* Close Button */}
            <div className="flex justify-center items-center w-10 h-10 bg-gray-500 rounded-tr-md rounded-br-md cursor-pointer hover:bg-red-500 duration-300 ml-[-10px]">
                <IoMdClose 
                    size={20} 
                    className="text-white" 
                    onClick={() => setVisible(false)} 
                />
            </div>

            <ul>
                {links.map(({ id, child, href, download }) => (
                    <li
                        key={id}
                        className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 duration-300 md:w-32 lg:w-40"
                    >
                        <a
                            href={href}
                            download={download}
                            className="flex justify-between items-center w-full text-white"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
