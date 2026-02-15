import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 sm:px-8 py-16">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1743670868664-09e94577e243?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8"
            alt="Profile"
            className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div className="text-gray-300 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Hi, I'm <span className="text-red-500">Yash</span>
          </h1>

          <p className="leading-relaxed text-sm sm:text-base">
            I’m a passionate{" "}
            <span className="text-red-400 font-semibold">
              MERN Stack Developer
            </span>{" "}
            who loves building interactive and user-focused web applications. I
            specialize in React, Node.js, Express, and MongoDB to create
            scalable and secure digital solutions.
          </p>

          <p className="leading-relaxed text-sm sm:text-base">
            I enjoy exploring new technologies, refining UI/UX design, and
            continuously improving my skills to stay ahead in the tech industry.
          </p>

          {/* Skills */}
          <div>
            <h3 className="text-white font-semibold mb-3">Skills</h3>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "JavaScript",
                "HTML",
                "CSS",
                "Docker",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-600/40 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contact"
              className="text-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition shadow-lg"
            >
              Contact Me
            </Link>

            <a
              href="/resume.pdf"
              download
              className="text-center px-6 py-3 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white rounded-lg font-medium transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
