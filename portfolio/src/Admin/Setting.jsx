// src/components/admin/Settings.jsx
import React, { useState } from "react";
import { api } from "../../uitls.js/api";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@example.com",
  });
  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
  });
  const [msg, setMsg] = useState("");

  const saveProfile = async (e) => {
    e.preventDefault();
    try {
      // PUT /api/admin/profile
      await api.put("/", profile);
      setMsg("Profile updated!");
    } catch {
      setMsg("Failed to update profile");
    }
  };
  const changePassword = async (e) => {
    e.preventDefault();
    try {
      // PUT /api/admin/password
      await api.put("/admin/password", passwords);
      setMsg("Password changed!");
      setPasswords({ current: "", next: "" });
    } catch {
      setMsg("Failed to change password");
    }
  };

  return (
    <>
      <Admin />
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={saveProfile} className="bg-white border rounded-xl p-4">
          <h3 className="font-semibold mb-3">Profile</h3>
          <div className="space-y-3">
            <input
              value={profile.name}
              onChange={(e) =>
                setProfile((p) => ({ ...p, name: e.target.value }))
              }
              className="w-full p-2 border rounded"
              placeholder="Name"
            />
            <input
              value={profile.email}
              onChange={(e) =>
                setProfile((p) => ({ ...p, email: e.target.value }))
              }
              className="w-full p-2 border rounded"
              placeholder="Email"
              type="email"
            />
            <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
              Save
            </button>
          </div>
        </form>

        <form
          onSubmit={changePassword}
          className="bg-white border rounded-xl p-4"
        >
          <h3 className="font-semibold mb-3">Password</h3>
          <div className="space-y-3">
            <input
              value={passwords.current}
              onChange={(e) =>
                setPasswords((p) => ({ ...p, current: e.target.value }))
              }
              className="w-full p-2 border rounded"
              placeholder="Current Password"
              type="password"
            />
            <input
              value={passwords.next}
              onChange={(e) =>
                setPasswords((p) => ({ ...p, next: e.target.value }))
              }
              className="w-full p-2 border rounded"
              placeholder="New Password"
              type="password"
            />
            <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
              Change
            </button>
          </div>
        </form>

        {msg && (
          <div className="md:col-span-2 p-3 rounded bg-blue-50 text-blue-700">
            {msg}
          </div>
        )}
      </div>
    </>
  );
}
