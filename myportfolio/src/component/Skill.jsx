import html from "../assets/html logo.png";
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
import nextjs from "../assets/icons8-next.js-48.png" // add a nextjs logo in assets
import cms from "../assets/CMS.png";  
import webdev from "../assets/Web development.jpg"// add a generic web dev logo in assets

function Skills() {
  const tech = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-500" },
    { id: 4, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 5, src: ts, title: "TypeScript", style: "shadow-blue-400" },
    { id: 6, src: react, title: "React.js", style: "shadow-blue-600" },
    { id: 7, src: redux, title: "Redux Toolkit", style: "shadow-purple-500" },
    { id: 8, src: Node, title: "Node.js", style: "shadow-green-500" },
    { id: 9, src: express, title: "Express.js", style: "shadow-gray-500" },
    { id: 10, src: mongodb, title: "MongoDB", style: "shadow-green-600" },
    { id: 11, src: mysql, title: "MySQL", style: "shadow-blue-600" },
    { id: 12, src: opps, title: "OOPs", style: "shadow-orange-400" },
    { id: 13, src: c, title: "C++", style: "shadow-blue-500" },
    { id: 14, src: nextjs, title: "Next.js", style: "shadow-gray-700" },
    { id: 15, src: cms, title: "CMS (Content Management Systems)", style: "shadow-pink-500" },
    { id: 16, src: webdev, title: "Web Development", style: "shadow-cyan-500" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Heading */}
        <div className="pb-8 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold border-b-4 border-cyan-500 inline-block pb-2">
            Skills
          </h2>
          <p className="py-6 text-gray-300 text-sm sm:text-base">
            These are the technologies & concepts I've worked with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-6 rounded-lg ${style} bg-gray-900 border border-gray-700 hover:border-cyan-400`}
            >
              <img
                src={src}
                alt={title}
                className="w-16 sm:w-20 mx-auto object-contain"
              />
              <p className="mt-4 text-sm sm:text-base font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
