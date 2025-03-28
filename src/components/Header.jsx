import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#fdfaf3] py-4 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand Name - Left */}
        <h1 className="text-2xl font-semibold">PureBrush</h1>

        {/* Navigation Links - Center (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-8 text-gray-800">
          <li>
            <a href="#" className="hover:underline">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Benefits
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Best-sellers
            </a>
          </li>
        </ul>

        {/* Shop Now Button - Right */}
        <button className="hidden md:block bg-[#0d4d4d] text-white px-6 py-2 rounded-md hover:bg-[#083a3a] transition">
          Shop Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Shows when menuOpen is true */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center">
          <a href="#" className="block text-gray-800 hover:underline">
            Categories
          </a>
          <a href="#" className="block text-gray-800 hover:underline">
            Benefits
          </a>
          <a href="#" className="block text-gray-800 hover:underline">
            Best-sellers
          </a>
          <button className="w-full bg-[#0d4d4d] text-white px-6 py-2 rounded-md hover:bg-[#083a3a] transition">
            Shop Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
