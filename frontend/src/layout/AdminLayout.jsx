import React, { useState } from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUsers, FaEnvelope, FaTools, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user || !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-64 bg-gray-800 text-white p-6
          overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex-shrink-0
          md:h-screen
          md:flex
          md:flex-col
        `}
      >
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
            aria-label="Close sidebar"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/admin/user"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 md:mt-6 rounded ${isActive
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "hover:bg-yellow-300 hover:text-gray-900"
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <FaUsers />
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contact"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded ${isActive
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "hover:bg-yellow-300 hover:text-gray-900"
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <FaEnvelope />
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded ${isActive
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "hover:bg-yellow-300 hover:text-gray-900"
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <FaTools />
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded ${isActive
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "hover:bg-yellow-300 hover:text-gray-900"
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <FaHome />
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header with hamburger */}
        <header className="bg-gray-800 text-white p-4 md:hidden flex items-center">
          <button
            onClick={toggleSidebar}
            className="mr-4 focus:outline-none"
            aria-label="Open sidebar"
          >
            <FaBars size={24} />
          </button>
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;




