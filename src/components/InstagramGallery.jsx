import React from "react";
import { FaInstagram } from "react-icons/fa";

const images = [
  "/Rectangle 19.png", 
  "/Rectangle 20.png", 
  "/Rectangle 21.png",
  "/Rectangle 22.png",
  "/Rectangle 23.png",
  "/Rectangle 24.png"
];

const InstagramGallery = () => {
  return (
    <section className="bg-[#F5F2EB] py-10 px-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-900">
        Be a part of the PureBrush family!
      </h2>
      <p className="text-gray-700 mt-2">
        Our feed is filled with inspiration to help you maintain a healthy and beautiful smile
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Instagram Link */}
      <div className="mt-12 flex justify-center items-center gap-2 text-gray-900 text-lg">
        <FaInstagram />
        <a href="#" className="hover:underline">Join us on Instagram</a>
      </div>
    </section>
  );
};

export default InstagramGallery;
