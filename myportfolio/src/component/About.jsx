function About() {
  return (
    <>
      <section className="about w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-12 px-4 sm:px-6">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">

          {/* Section Heading */}
          <div className="pb-6 text-center sm:text-left mt-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold border-b-4 border-cyan-500 inline-block pb-2">
              About Me
            </h1>
          </div>

          {/* Intro */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-5">
            I am a passionate <strong>Full-Stack Web Developer</strong> with strong problem-solving skills 
            and a solid foundation in <strong>Data Structures & Algorithms</strong>.  
            I specialize in building modern, scalable, and user-centric web applications.
          </p>

          {/* Tech Stack */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-5">
            My core tech stack includes <strong>React.js</strong>, <strong>Next.js</strong>, 
            <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, 
            <strong>MySQL</strong>, <strong>Tailwind CSS</strong>, and <strong>Redux Toolkit</strong>.  
            I am currently pursuing a <strong>B.Tech in Information Technology</strong> from 
            MAKAUT University with a CGPA of <strong>9.0</strong>.
          </p>

          {/* Internship Experience */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-5">
            I have hands-on industry experience through internships at 
            <strong> Digisamaksh Pvt. Ltd.</strong> and 
            <strong> Theody Svadhyay Trailblazer LLP</strong>.  
            At Digisamaksh, I developed a modern food delivery UI using React with lazy loading 
            and Redux Toolkit for performance optimization.  
            At Theody, I worked as a Full-Stack Developer, implemented secure APIs using 
            <strong> JWT authentication</strong>, and received a performance bonus for my contributions.
          </p>

          {/* Projects */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-5">
            My projects include an <strong>Online Food Ordering Platform</strong> with Razorpay integration, 
            JWT-based authentication, and Google Maps tracking, along with a 
            <strong> Multi-Lingual Document Summarization Tool</strong> built using React, Flask, MarianMT, 
            and BART. These projects highlight my ability to deliver secure and scalable solutions.
          </p>

          {/* DSA */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            I have solved <strong>250+ DSA problems</strong> across LeetCode, GeeksforGeeks, and CodeChef, 
            and regularly participate in coding contests. I enjoy breaking down complex problems 
            into clean, efficient solutions.
          </p>

          {/* Goals */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-cyan-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 text-center">
              🎯 My Goals
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-200">
              <li>Become an expert <strong>Full-Stack Web Developer</strong></li>
              <li>Build real-world applications using <strong>AI & Machine Learning</strong></li>
              <li>Develop scalable and secure <strong>AI-powered platforms</strong></li>
              <li>Contribute to <strong>open-source</strong> and developer communities</li>
              <li>Continuously grow through learning and innovation</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;
