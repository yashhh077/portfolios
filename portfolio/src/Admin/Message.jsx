// src/components/admin/Messages.jsx
import React, { useEffect, useState } from "react";
import { api } from "../../uitls.js/api";
import Admin from "./admin";

export default function Messages() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const load = async () => {
    try {
      // GET /api/messages?search=
      const { data } = await api.get("/contact", {
        params: { search },
      });

      setList(data?.data || data || []);
    } catch {
      // fallback dummy
      setList([
        {
          _id: "1",
          firstname: "John",
          lastname: "Doe",
          email: "john@example.com",
          phoneNumber: "9876543210",
          messageText: "Hi there!",
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    if (!confirm("Delete this message?")) return;
    try {
      // DELETE /api/messages/:id
      await api.delete(`/contact/delete/${id}`);
      await load();
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to delete");
    }
  };

  const onSearch = async (e) => {
    e.preventDefault();
    await load();
  };

  return (
    <>
      <Admin />
      <div className="space-y-4">
        <form onSubmit={onSearch} className="flex gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="p-2 border rounded flex-1"
          />
          <button className="px-4 rounded bg-gray-900 text-white hover:bg-gray-800">
            Search
          </button>
        </form>

        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {list.map((m) => (
                  <tr key={m._id} className="border-t">
                    <td className="p-3">
                      {m.firstname} {m.lastname}
                    </td>
                    <td className="p-3">{m.email}</td>
                    <td className="p-3">{m.phoneNumber}</td>
                    <td className="p-3 max-w-xs truncate">{m.messageText}</td>
                    <td className="p-3">
                      {new Date(m.createdAt || Date.now()).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => remove(m._id)}
                        className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {list.length === 0 && (
                  <tr>
                    <td className="p-3 text-gray-500" colSpan="6">
                      No messages.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
