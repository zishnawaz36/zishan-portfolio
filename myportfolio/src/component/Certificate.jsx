import React from "react";

function Certificate() {
  const links = [
    {
      id: 0,
      name: "Provisional Certificate (Graduation Certificate)",
      path: "https://drive.google.com/file/d/1yIuDiUxKousQrWRVucLxNC1AAisyFlIz/view?usp=drive_link",
    },
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
      name: "Internship Completion Certificate - Digisamaksh Pvt. Ltd.",
      path: "/Digi certificate.pdf", // public folder
    },
    {
      id: 6,
      name: "Internship Completion Certificate - Theody Svadhyay Trailblazer LLP",
      path: "/Internship.Certificate (1).pdf", // public folder
    },
    {
      id: 7,
      name: "Zeeshan Nawaz Resume",
      path: "/Zeeshan_Nawaz_Resume_dev.pdf", // public folder
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
          Certificates
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {links.map(({ id, name, path }) => (
            <div
              key={id}
              className="w-full max-w-xs bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              {/* Certificate Name */}
              <p className="text-lg font-semibold text-center mb-4 text-gray-200 group-hover:text-cyan-400 transition-colors duration-300">
                {name}
              </p>

              {/* Button */}
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium shadow-md hover:scale-105 hover:shadow-cyan-500/50 transition-transform duration-300">
                  View Certificate
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
