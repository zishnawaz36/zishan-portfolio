import React from "react";
import { Briefcase, GraduationCap, Code2 } from "lucide-react"; // icons


const experiences = [
  {
    title: "Software Developer (Backend)",
    company: "Eazybe, Remote | Jan 2026 – Present",
    description:
      "Currently working as a Software Developer (Backend) for B2B SaaS products. Developing scalable backend services with Node.js & Express.js, designing secure REST APIs with JWT authentication, and implementing role-based access control (RBAC) for different user types. Collaborating with frontend, product, and QA teams for end-to-end feature delivery.",
    icon: <Briefcase size={22} className="text-white" />,
  },
  {
    title: "Web Developer",
    company: "Bitquest LLP, Kolkata | Feb 2025 – Dec 2025",
    description:
      "Worked as a Web Developer building and maintaining responsive MERN applications. Improved mobile performance by 25% using optimized Tailwind CSS, integrated secure REST APIs with JWT, and collaborated with frontend & backend teams to deliver features end-to-end.",
    icon: <Briefcase size={22} className="text-white" />,
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Theody Svadhyay Trailblazer LLP, Bangalore | Jul 2024 – Dec 2024",
    description:
      "Developed customer support portals using React.js, Next.js, Tailwind CSS, and Node.js. Integrated backend APIs, optimized frontend performance, and contributed in Agile sprints. Received performance bonus for impactful contributions.",
    icon: <Code2 size={22} className="text-white" />,
  },
  {
    title: "Web Development Intern",
    company: "Digisamaksh Pvt. Ltd. | Jul 2024 – Sep 2024",
    description:
      "Built a modern food delivery website using HTML, CSS, JavaScript, and React. Optimized performance with lazy loading and implemented state management using Redux Toolkit.",
    icon: <Code2 size={22} className="text-white" />,
  },
  {
    title: "B.Tech in Information Technology",
    company: "MAKAUT University, Kolkata | 2025",
    description:
      "Graduated in July 2025 with CGPA 8.8/10. Studied DSA, DBMS, OS, and Computer Networks. Finalist in Hackathon 2023 and solved 250+ DSA problems across competitive platforms.",
    icon: <GraduationCap size={22} className="text-white" />,
  },
];

function Experience() {
  return (
    <section
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 px-4 sm:px-6"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Heading */}
        <div className="pb-8 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold border-b-4 border-cyan-500 inline-block pb-2">
            Experience & Education
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500 hover:shadow-cyan-500/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="absolute -top-6 left-6 bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                {exp.icon}
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-cyan-400 font-medium text-sm sm:text-base">
                  {exp.company}
                </p>
                <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
