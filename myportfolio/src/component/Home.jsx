import React from "react";
import heroImage from "../assets/Hero.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Skills from "./Skill";
import Experience from "./Experience";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        name="home"
        className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 flex items-start md:items-center pt-24 md:pt-0"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 h-full">

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center animate-fadeIn">
            <h1 className="text-3xl max-[360px]:text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Hi, I’m <span className="text-cyan-400">Zeeshan Nawaz</span>
              <br className="hidden sm:block" />
              Software Developer
            </h1>

            <p className="text-gray-300 mb-3 sm:mb-4 text-sm max-[360px]:text-xs sm:text-base leading-relaxed">
              Software Developer at <strong>Eazybe</strong>, working on scalable
              <strong> B2B SaaS backend systems</strong>.
              Experienced in building secure and high-performance applications using
              <strong> Node.js</strong>, <strong>Express.js</strong>,
              <strong> MongoDB</strong>, and <strong>MySQL</strong>.
            </p>

            <p className="text-gray-400 mb-5 text-xs sm:text-sm md:text-base leading-relaxed">
              Strong in <strong>REST API design</strong>, <strong>JWT</strong>,
              <strong> RBAC</strong>, <strong>API Security</strong>, and
              <strong> Razorpay Integration</strong>.
              Solved <strong>250+ DSA problems</strong> across LeetCode, GFG & CodeChef.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/projects"
                className="group text-white px-5 sm:px-6 py-2 sm:py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-transform duration-300 shadow-lg text-sm sm:text-base"
              >
                View Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </Link>

              <a
                href="https://drive.google.com/file/d/1QaDRVxP_uCun9y7h9CpEALkK_WIkQEgg/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="px-5 sm:px-6 py-2 sm:py-3 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition duration-300 text-sm sm:text-base"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-16 md:mt-0">
            <img
              src={heroImage}
              alt="Zeeshan Nawaz"
              className="rounded-2xl w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl shadow-cyan-500/40 hover:scale-105 transition-transform duration-500 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <Skills />
      <Experience />

      {/* CTA Section */}
      <section className="bg-gray-900 py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
          Let’s Build Something Amazing Together 🚀
        </h2>
        <a
          href="mailto:zeeshannawaz.makaut.it@gmail.com"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Contact Me
        </a>
      </section>
    </>
  );
}

export default Home;
