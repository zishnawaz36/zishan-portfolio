import React from "react";
import heroImage from "../assets/photo.jpg.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Experience from "./Experience";
import Skills from "./Skill";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div
                name="home"
                className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 flex items-center"
            >
                <div className="max-w-screen-lg mx-auto px-4 pt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 h-full">
                    
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            I'm a Full Stack Web Developer
                        </h1>

                        <p className="text-gray-400 mb-4 text-base sm:text-lg leading-relaxed">
                            I’m currently pursuing a B.Tech in Information Technology and specialize in full-stack development. I have hands-on experience with technologies like <strong>ReactJS</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>, <strong>Tailwind CSS</strong>, and <strong>Redux Toolkit</strong>. I develop scalable, responsive web applications, REST APIs, and intuitive user interfaces.
                        </p>

                        <p className="text-gray-400 mb-4 text-base sm:text-lg leading-relaxed">
                            During my internships at <strong>Digisamaksh Private Limited</strong> and <strong>Theody Svadhyay Trailblazer LLP</strong>, I contributed to real-world projects involving UI design, full-stack development, and secure API implementations, enhancing both my technical and collaboration skills.
                        </p>

                        <p className="text-gray-400 mb-6 text-base sm:text-lg leading-relaxed">
                            I’ve solved over <strong>250+ DSA problems</strong> across LeetCode, GeeksforGeeks, and CodeChef. I’m proficient in core data structures and algorithms including Arrays, Linked Lists, Trees, Graphs, Sorting, Searching, and Dynamic Programming. I’m passionate about competitive coding and problem-solving.
                        </p>

                        <Link
                            to="/projects"
                            className="group text-white w-fit px-6 py-3 flex items-center mx-auto md:mx-0 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-transform duration-300"
                        >
                            View Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <MdKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={heroImage}
                            alt="My Profile"
                            className="rounded-2xl w-2/3 sm:w-3/5 md:w-4/5 lg:w-3/4 shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Skills and Experience Sections */}
            <Skills />
            <Experience />
        </>
    );
}

export default Home;
