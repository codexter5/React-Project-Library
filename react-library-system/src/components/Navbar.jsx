import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-indigo-700 font-semibold rounded-lg px-4 py-2 shadow-md transition duration-300"
      : "text-white hover:bg-indigo-600 hover:text-white rounded-lg px-4 py-2 transition duration-300";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img className="h-10 w-auto" src={logo} alt="React Library" />
            <span className="hidden md:block text-white text-2xl font-extrabold">
              React Library
            </span>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/books" className={linkClass}>
              Browse Books
            </NavLink>
            <NavLink to="/add-book" className={linkClass}>
              Request Books
            </NavLink>
          </div>

          {/* Mobile Menu Button (optional) */}
          {/* You can add a hamburger menu here for mobile */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
