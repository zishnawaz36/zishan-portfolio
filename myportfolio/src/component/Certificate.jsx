import React from "react";

function Certificate() {
    const links = [
        {
            id: 1,
            name: "C++",
            path: "https://olympus.mygreatlearning.com/courses/57491/certificate",
        },
        {
            id: 2,
            name: "JavaScript",
            path: "https://olympus.mygreatlearning.com/courses/30145/certificate",
        },
        {
            id: 3,
            name: "React.js",
            path: "https://olympus.mygreatlearning.com/courses/52045/certificate",
        },
        {
            id: 4,
            name: "Full Stack Web Development",
            path: "https://app.100xdevs.com/certificate/verify/WTFAFPUW",
        },
        {
            id: 5,
            name: "Internship Completion Certificate at Digisamaksh Private Limited",
            path: "/Digi certificate.pdf", // public folder
        },
        {
            id: 6,
            name: "Internship Completion Certificate at Theody Svadhyay Trailblazer LLP",
            path: "/Internship.Certificate (1).pdf", // public folder
        },
        {
            id: 7,
            name: "Zeeshan Nawaz Resume",
            path: "/Zeeshan_Nawaz_Resume_dev.pdf", // public folder
        },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-gray-800 p-4">
            <h1 className="text-white text-5xl font-bold mb-10 mt-24">Certificates</h1>
            
            <div className="flex flex-wrap justify-center gap-8">
                {links.map(({ id, name, path }) => (
                    <div key={id} className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-md w-72">
                        <p className="text-blue-400 font-semibold text-center mb-3">{name}</p>
                        <a href={path} target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105">
                                View Certificate
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificate;
