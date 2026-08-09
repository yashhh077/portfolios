import React, { useState, useEffect } from "react";
import axios from "axios";
import Admin from "./Admin";

export default function Addproject() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    image: "",
    link: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://portfolios-6d76.onrender.com/shoproject");
      setProjects(res.data.projects);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle add project
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("admintoken"); // 👈 token lo

      await axios.post("https://portfolios-6d76.onrender.com/addproject", form, {
        headers: {
          Authorization: `Bearer ${token}`, // 👈 token bhejo
        },
      });

      setForm({
        title: "",
        description: "",
        techStack: "",
        image: "",
        link: "",
      });
      fetchProjects();
    } catch (err) {
      console.error("Error adding project:", err);
      alert("❌ Unauthorized! Token missing or invalid");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete project
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const token = localStorage.getItem("admintoken"); // 👈 token lo

      await axios.delete(`https://portfolios-6d76.onrender.com/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // 👈 token bhejo
        },
      });

      fetchProjects();
    } catch (err) {
      console.error("Error deleting project:", err);
      alert("❌ Unauthorized! Token missing or invalid");
    }
  };

  return (
    <>
      <Admin />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Projects</h1>

        {/* Add Project Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow"
        >
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack (comma separated)"
            value={form.techStack}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="link"
            placeholder="Project Link"
            value={form.link}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded md:col-span-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 md:col-span-2"
          >
            {loading ? "Adding..." : "Add Project"}
          </button>
        </form>

        {/* Project List */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">All Projects</h2>
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Tech Stack</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(projects) && projects.length > 0 ? (
                projects.map((p) => (
                  <tr key={p._id} className="border-b">
                    <td className="p-2 border">{p.title}</td>
                    <td className="p-2 border">{p.techStack}</td>
                    <td className="p-2 border">
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-3 text-gray-500">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
