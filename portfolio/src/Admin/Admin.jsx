import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admintoken");
    navigate("/login");
  };

  const navItem =
    "flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition";
  const active = "bg-gray-900 text-white hover:bg-gray-800";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
        <Link to="/" className="block mb-6 text-xl font-extrabold">
          Portfolio Admin
        </Link>
        <nav className="space-y-2">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) => `${navItem} ${isActive ? active : ""}`}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/message"
            className={({ isActive }) => `${navItem} ${isActive ? active : ""}`}
          >
            Messages
          </NavLink>
          <NavLink
            to="/admin/setting"
            className={({ isActive }) => `${navItem} ${isActive ? active : ""}`}
          >
            Settings
          </NavLink>
          <NavLink
            to="/admin/addproject"
            className={({ isActive }) => `${navItem} ${isActive ? active : ""}`}
          >
            Add Project
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Admin Panel</h1>
          <button
            onClick={logout}
            className="px-3 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            Logout
          </button>
        </header>

        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
