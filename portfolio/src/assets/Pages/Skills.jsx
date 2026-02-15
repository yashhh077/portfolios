import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaGithub,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiPostman,
  SiKubernetes,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={36} className="text-orange-500" />,
      level: "95%",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={36} className="text-blue-500" />,
      level: "90%",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={36} className="text-yellow-400" />,
      level: "85%",
    },
    {
      name: "React JS",
      icon: <FaReact size={36} className="text-cyan-400" />,
      level: "90%",
    },
    {
      name: "Node JS",
      icon: <FaNodeJs size={36} className="text-green-500" />,
      level: "85%",
    },
    {
      name: "Express JS",
      icon: <SiExpress size={36} className="text-gray-800" />,
      level: "80%",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={36} className="text-green-600" />,
      level: "75%",
    },
    {
      name: "Docker",
      icon: <FaDocker size={36} className="text-blue-400" />,
      level: "70%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={36} className="text-cyan-500" />,
      level: "90%",
    },
    {
      name: "Github",
      icon: <FaGithub size={36} className="text-black" />,
      level: "80%",
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill size={36} className="text-black" />,
      level: "70%",
    },
    {
      name: "Postman",
      icon: <SiPostman size={36} className="text-orange-400" />,
      level: "90%",
    },
    {
      name: "AWS",
      icon: <FaAws size={36} className="text-gray-800" />,
      level: "80%",
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes size={36} className="text-blue-700" />,
      level: "80%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 via-indigo-900 to-gray-400">
      {/* ===== EXPERIENCE + EDUCATION ===== */}
      <div className="pt-24 pb-16 px-4 sm:px-8 lg:px-20 max-w-6xl mx-auto">
        {/* Experience */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 border-l-4 border-blue-500 pl-4">
            Experience
          </h1>

          <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
              Tech Solve
            </h2>
            <p className="text-gray-200 mb-4 text-sm sm:text-base">
              June 2025 – April 2026
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-200 text-sm sm:text-base">
              <li>Developed and maintained responsive web interfaces.</li>
              <li>Integrated frontend with RESTful APIs.</li>
              <li>Optimized performance and scalability.</li>
              <li>Collaborated with cross-functional teams.</li>
              <li>Wrote clean and maintainable code.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 border-l-4 border-blue-500 pl-4">
            Education
          </h1>

          <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg">
            <p className="text-gray-200 mb-2 text-sm sm:text-base">
              Batch 2026 – Passout
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
              Bachelor of Engineering
            </h2>

            <div className="space-y-1 text-gray-200 text-sm sm:text-base">
              <p>Computer Science and Engineering</p>
              <p>Tiet College of Engineering & Technology, Amravati</p>
              <p>Focused on full-stack web development.</p>
            </div>
          </div>
        </section>
      </div>

      {/* ===== SKILLS SECTION ===== */}
      <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-red-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {skill.icon}
                <h3 className="mt-3 text-base sm:text-lg font-semibold text-white">
                  {skill.name}
                </h3>

                <div className="w-full bg-gray-300 rounded-full h-2 mt-3">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-700"
                    style={{ width: skill.level }}
                  ></div>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-gray-200">
                  {skill.level} Proficiency
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
