import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/Herophoto.png')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto h-full flex flex-col justify-center items-center md:items-start px-6 text-center md:text-left">
        
        {/* Text (On Image for Desktop, Below for Mobile) */}
        <div className="text-white md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold">Love Your Smile.</h1>
          <p className="mt-4 text-lg">
            It's a confidence booster. Our easy-to-use applicator ensures even 
            coverage, making it perfect for daily use.
          </p>
          <button className="mt-6 bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
            Shop Now
          </button>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
