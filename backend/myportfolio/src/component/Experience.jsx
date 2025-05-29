import React from "react";

const experiences = [
    {
        title: "Web Development Intern",
        company: "Digisamaksh Groups",
        description:
            "Developed a food delivery website using HTML, CSS, and JavaScript. Participated in daily stand-ups, collaborated in a 3-member team, and optimized performance using lazy loading. Learned and applied React.js during the internship.",
    },
    {
        title: "Full Stack Developer Intern",
        company: "Theody Svadhyay Trailblazer, Bangalore",
        description:
            "Built a customer support portal using React.js, Tailwind CSS, and Next.js. Worked on frontend optimization, backend API integration, and MongoDB. Contributed in an Agile environment and received stipend and bonus for outstanding performance.",
    },
];

function Experience() {
    return (
        <div name="experience" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500">Experience</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((experience, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold">{experience.title}</h3>
                            <p className="text-xl font-medium">{experience.company}</p>
                            <p className="text-gray-400 mt-2">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
