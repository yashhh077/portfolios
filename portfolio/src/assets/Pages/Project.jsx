import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Github } from "lucide-react";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://portfolios-6d76.onrender.com/shoproject");
        setProjects(res.data.projects || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-8 bg-gradient-to-b from-gray-600 to-black min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-200">
        My <span className="text-red-600">Projects</span>
      </h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading projects...</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <div className="relative group">
                  <img
                    src={project.image || "https://placehold.co/600x400"}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition"
                    >
                      Live <Eye size={16} />
                    </a>

                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition"
                    >
                      Code <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-3">
              No projects found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Project;
