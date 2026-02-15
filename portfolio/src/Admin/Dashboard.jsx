import React, { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";

export default function Dashboard() {
  const [stats, setStats] = useState({ projects: 0, messages: 0 });
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const resProjects = await axios.get("http://localhost:5000/shoproject");
        const resMessages = await axios.get("http://localhost:5000/contact");

        const projects = resProjects.data.projects || []; // <-- safe access
        const messages = resMessages.data || []; // <-- backend se array aa rha

        setStats({
          projects: projects.length,
          messages: messages.length,
        });

        setRecentProjects(projects.slice(-3).reverse());
        setRecentMessages(messages.slice(-3).reverse());
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Total Projects</h2>
          <p className="text-3xl font-bold text-blue-600">
            <CountUp end={stats.projects} duration={2} />
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-3xl font-bold text-green-600">
            <CountUp end={stats.messages} duration={2} />
          </p>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
        <ul className="space-y-2">
          {recentProjects.length > 0 ? (
            recentProjects.map((p) => (
              <li key={p._id} className="border-b pb-2">
                <span className="font-semibold">{p.title}</span> – {p.techStack}
              </li>
            ))
          ) : (
            <p>No projects yet.</p>
          )}
        </ul>
      </div>

      {/* Recent Messages */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
        <ul className="space-y-2">
          {recentMessages.length > 0 ? (
            recentMessages.map((m, i) => (
              <li key={i} className="border-b pb-2">
                <span className="font-semibold">{m.firstname}</span>:{" "}
                {m.messageText}
              </li>
            ))
          ) : (
            <p>No messages yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
