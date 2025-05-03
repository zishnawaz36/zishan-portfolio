
import React from 'react';

function Introduction() {
    return (
        <div className="introduction w-full h-full bg-gray-800 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-4xl sm:text-7xl font-bold text-white mb-4">
                I'm a Full Stack Web Developer
            </h1>
            <p className="text-gray-300 py-4 max-w-md">
                As a passionate and driven full stack web developer, I possess a strong foundation in both frontend and backend technologies. 
                My skill set includes:
            </p>
            <ul className="list-disc list-inside text-gray-400">
                <li>HTML, CSS, and Tailwind CSS for crafting responsive and visually appealing user interfaces.</li>
                <li>JavaScript and ReactJS for building dynamic and interactive web applications.</li>
                <li>Redux for efficient state management in complex applications.</li>
                <li>NodeJS and ExpressJS for developing robust backend services.</li>
                <li>MongoDB and MySQL for effective data storage and management.</li>
            </ul>
            <p className="text-gray-500 py-4 max-w-md">
                I am eager to learn and grow in the ever-evolving world of technology, continuously honing my skills to deliver high-quality solutions.
            </p>
        </div>
    );
}

export default Introduction;
