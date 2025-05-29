import React, { useState } from "react";
import restaurant from "../assets/restaurant.png";
import printify from "../assets/prinitify.png";
import cryptoCoin from "../assets/Bitcoin-PNG-Transparent-HD-Photo.png";
import Summeryandtranslation from "../assets/project1.png";

function Project() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            src:Summeryandtranslation,
            title: "Document Summarization and Translation",
            style: "shadow-orange-500",
            description: "This project allows users to Summarize and Translate documents using NLP after registering and logging in. The frontend is built with React, providing an interactive user interface, while the backend uses Node.js with Express.js to handle API requests and manage the summarization and translation logic.",
            demoUrl: "https://github.com/zishnawaz36/Document-Summarization-Translation"
        },
        {
            id: 2,
            src: restaurant,
            title: "Online Food Application",
            style: "shadow-orange-500",
            description:"The online food ordering application is a comprehensive platform built with React.js, Tailwind CSS, Redux, Redux Toolkit, and Node.js with Express. It offers role-based access where Managers can add new restaurants, manage addresses, and update menus, while Admins have full access to view, edit, and delete data. Users are required to log in to access the payment section and order food from various restaurants. Authentication is secured using JWT tokens, and passwords are hashed with bcrypt to ensure user safety. The cart functionality, which allows users to add and remove items, is implemented using Redux for efficient state management. Additionally, the application includes a live location feature, enabling users to input their delivery address or track their orders in real-time. Payments are processed securely using Razorpay, and users can view an invoice for their order, including delivery and item details. Overall, this platform combines robust features, security measures, and a smooth user experience for both admins and end users.",
            demoUrl: "https://github.com/zishnawaz36/Online-Food-Application-final"
        },
        
        {
            id: 3,
            src: printify,
            title: "Printify: Print Management",
            style: "shadow-blue-500",
            description: "A print management application that streamlines print jobs. Users can manage printers and track their print jobs effectively. Features include generating reports and monitoring printer status. Technologies used: React, Node.js, Express, MySQL.",
            demoUrl: "https://github.com/zishnawaz36/Printify-Homepage"
        },
        {
            id: 4,
            src: cryptoCoin,
            title: "Crypto Coin Tracker",
            style: "shadow-purple-500",
            description: "A cryptocurrency tracking application that provides real-time data on the value of various cryptocurrencies. Users can see price fluctuations, value in INR, EUR, and USD, as well as market rank. This project utilizes React and Next.js for the frontend and REST APIs for data fetching.",
            demoUrl:"https://github.com/zishnawaz36/CryptoCoin"
        }
    ];

    const handleDescriptionClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="w-full bg-gray-800 text-white py-10">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 my-5">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my projects with Demo links</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {projects.map(({ id, src, title, style, description, demoUrl }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt={title} className="w-20 mx-auto mb-4" />
                            <p className="text-xl font-semibold">{title}</p>
                            
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => handleDescriptionClick({ title, description })}
                                    className="px-4 py-2 m-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
                                >
                                    Description
                                </button>
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 m-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-white text-black p-6 rounded-lg w-11/12 md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
