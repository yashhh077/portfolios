import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { User2Icon, X } from "lucide-react";

function Hero() {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-600 via-gray-900 to-black flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-12 text-white">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:ml-56 md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-purple-400">Yash Mahulkar</span>
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-red-400">
            <Typewriter
              words={[
                "Software Engineer",
                "MERN Stack Developer",
                "Backend Developer",
                "Frontend Developer",
                "Freelancer",
                "Quick Learner",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
            I build high-performance web applications using the MERN stack
            (MongoDB, Express.js, React, Node.js). My focus is on creating
            scalable, intuitive, and impactful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-medium transition shadow-lg text-center"
            >
              Contact Me
            </Link>

            <a
              href="/YashMahulkar.pdf"
              download
              className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full font-medium transition text-center"
            >
              Download CV
            </a>
          </div>

          <button
            onClick={() => setPopup(true)}
            className="mt-4 inline-flex lg:px-20  items-center justify-center gap-4 px-6 py-3 bg-black hover:bg-gray-800 rounded-full shadow-md transition"
          >
            Hire Me <User2Icon size={18} />
          </button>
        </div>
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img
            className="w-56 h-56 sm:w-72 sm:h-72 object-cover hover:animate-bounce transition-transform duration-150 ease-in-out rounded-full border-4 border-purple-500 shadow-xl"
            src="https://plus.unsplash.com/premium_vector-1738465101661-70f31075f6e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8"
            alt="Profile"
          />
        </div>
      </div>

      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-2xl p-8 relative">
            <button
              onClick={() => setPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            <div className="text-center space-y-4">
              <h1 className="text-xl font-bold text-gray-800">
                Let's Work Together
              </h1>

              <p className="text-gray-600 text-sm">
                Interested in working together? Reach out and let's build
                something amazing.
              </p>

              <div className="bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-500 transition">
                yashmahulkar15@gmail.com
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
