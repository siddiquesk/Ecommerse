import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { isLoggedIn, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-emerald-700 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-emerald-200 transition">
          Sufiyan <span className="text-yellow-300">WebDeveloper</span>
        </Link>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:gap-6 absolute md:static top-[70px] left-0 w-full md:w-auto bg-emerald-700 md:bg-transparent z-50 px-6 md:px-0`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-lg font-medium py-4 md:py-0">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>

            {user?.isAdmin && (
              <li>
                <Link to="/admin/user" className="hover:text-yellow-300 transition">
                  Admin
                </Link>
              </li>
            )}

            <li>
              <Link to="/about" className="hover:text-yellow-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-yellow-300 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>

            {isLoggedIn ? (
              <li>
                <Link
                  to="/logout"
                  className="px-4 py-1 rounded-full border border-gray-300 text-white hover:bg-white hover:text-emerald-600 transition duration-200"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/signup"
                    className="px-4 py-1 rounded-full bg-white text-emerald-600 border border-gray-200 hover:bg-red-800 hover:text-white transition duration-200"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="px-4 py-1 rounded-full border border-white text-white hover:bg-white hover:text-emerald-600 transition duration-200"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

