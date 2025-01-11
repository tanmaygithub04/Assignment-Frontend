"use client";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-1">
      <div className="sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="KoinX" className="h-15 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center font-bold">
            <a href="#" className="text-gray-700 hover:text-blue-600">Crypto Taxes</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Free Tools</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Resource Center</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Started</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white">
          <a href="#" className="block text-gray-700 hover:text-blue-600 px-4 py-2 text-center">Crypto Taxes</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 px-4 py-2 text-center">Free Tools</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 px-4 py-2 text-center">Resource Center</a>
          <a href="#" className="block bg-blue-600 text-white text-center px-4 py-2 rounded-lg mt-2 mx-4">Get Started</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;