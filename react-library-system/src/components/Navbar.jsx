import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-amber-100 text-amber-900 font-semibold rounded-lg px-4 py-2 shadow-md transition duration-300"
      : "text-amber-50 hover:bg-amber-100 hover:text-amber-900 rounded-lg px-4 py-2 transition duration-300";

  return (
    <nav className="bg-amber-900 border-b border-amber-700 shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img className="h-10 w-auto" src={logo} alt="Library Logo" />
            <span className="hidden md:block text-amber-50 text-2xl font-extrabold font-serif tracking-wide">
              React Library
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/books" className={linkClass}>Browse Books</NavLink>
            <NavLink to="/add-book" className={linkClass}>Add Books</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-50 hover:text-amber-200 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-amber-900 overflow-hidden transition-max-height duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <NavLink
            to="/"
            className="block text-amber-50 hover:bg-amber-100 hover:text-amber-900 font-medium rounded-lg px-4 py-2 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className="block text-amber-50 hover:bg-amber-100 hover:text-amber-900 font-medium rounded-lg px-4 py-2 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Browse Books
          </NavLink>
          <NavLink
            to="/add-book"
            className="block text-amber-50 hover:bg-amber-100 hover:text-amber-900 font-medium rounded-lg px-4 py-2 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Add Books
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
