function About() {
    return (
        <>
            <div className="about w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <h1 className="text-4xl font-bold">About Me</h1>
                    </div>
                    <p className="text-lg">
                        I am a passionate full-stack web developer with strong problem-solving skills and a solid foundation in data structures and algorithms. 
                        I am proficient in modern technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>, <strong>Tailwind CSS</strong>, and <strong>Redux Toolkit</strong>. 
                        Currently, I am pursuing a B.Tech in Information Technology at Maulana Abul Kalam Azad University of Technology, maintaining a CGPA of 8.9.
                    </p>
                    <br />
                    <p className="text-lg">
                        I have gained practical experience through internships at <strong>Digisamaksh Private Limited</strong> and <strong>Theody Svadhyay Trailblazer LLP</strong>. 
                        At Digisamaksh, I contributed to building a modern food delivery UI using React, implementing performance-boosting techniques like lazy loading and Redux Toolkit for efficient state management. 
                        At Theody, I worked as a full-stack developer, building a portal with Node.js and Tailwind CSS, and focused on securing APIs, which earned me a performance bonus for my contributions.
                    </p>
                    <br />
                    <p className="text-lg">
                        I’ve built full-stack applications such as an <strong>Online Food Ordering App</strong> with Razorpay integration, JWT-based authentication, and real-time Google Maps tracking, and a <strong>Multi-lingual Document Summarization Tool</strong> using React, Flask, MarianMT, and BART for translation and summarization.
                        These projects showcase my ability to develop scalable, secure, and user-friendly web applications.
                    </p>
                    <br />
                    <p className="text-lg">
                        In addition to development, I’ve solved 250+ DSA problems on platforms like LeetCode and GeeksforGeeks and actively participate in coding contests. 
                        I’m continuously working to enhance my technical expertise and thrive on turning complex challenges into elegant solutions.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
