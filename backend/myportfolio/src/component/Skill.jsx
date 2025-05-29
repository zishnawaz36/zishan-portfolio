import html from '../assets/html logo.png';
import css from "../assets/CSS-Logo.png";
import tailwind from "../assets/tailwind.jpeg";
import js from "../assets/javaScript.png";
import ts from "../assets/ts logo.jpeg";
import react from "../assets/react logo.jpeg";
import redux from "../assets/redux.jpeg";
import Node from "../assets/Node.jpeg";
import express from "../assets/express.jpeg";
import mongodb from "../assets/mongo.jpeg";
import mysql from "../assets/mysql.jpeg";
import opps from "../assets/opps.jpeg";
import c from "../assets/c--logo-icon-0.png";
function Skills() {
    const tech = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-500",
        },
        {
            id: 4,
            src: js,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 5,
            src: ts,
            title: "TypeScript",
            style: "shadow-blue-400",
        },
        {
            id: 6,
            src: react,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 7,
            src: redux,
            title: "Redux",
            style: "shadow-purple-500",
        },
        {
            id: 8,
            src: Node,
            title: "Node.js",
            style: "shadow-green-500",
        },
        {
            id: 9,
            src: express,
            title: "Express",
            style: "shadow-gray-500",
        },
        {
            id: 10,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-600",
        },
        {
            id: 11,
            src: mysql,
            title: "MySQL",
            style: "shadow-blue-600",
        },
        {
            id: 12,
            src: opps,
            title: "OOPs",
            style: "shadow-orange-400",
        },
        {
            id: 13,
            src: c,
            title: "C++",
            style: "shadow-blue-500",
        },
    ];

    return (
        <div className="w-full bg-gray-800 text-white py-10 min-h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 my-10">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                        Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {tech.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt={title} className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
