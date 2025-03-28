import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf3] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Brand Name (Centered) */}
        <h2 className="text-3xl font-semibold text-center">PureBrush</h2>

        {/* Navigation Links (Centered) */}
        <nav className="flex justify-center space-x-6 mt-4 text-gray-700">
          <a href="#" className="hover:underline">
            Categories
          </a>
          <a href="#" className="hover:underline">
            Benefits
          </a>
          <a href="#" className="hover:underline">
            Best-sellers
          </a>
          <a href="#" className="hover:underline">
            About us
          </a>
        </nav>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Subscription Form - Left Side */}
          <div className="flex space-x-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-600 px-4 py-2 rounded-md w-full md:w-64 focus:outline-none"
            />
            <button className="bg-[#0d4d4d] text-white px-6 py-2 rounded-md hover:bg-[#083a3a] transition">
              Subscribe
            </button>
          </div>

          {/* Social Media Icons - Right Side */}
          <div className="flex space-x-4 text-2xl text-gray-800 mt-6 md:mt-0">
            <a href="#" className="hover:text-gray-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
