import React from "react";

const SalesSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center">
      {/* Background Image (Visible on Desktop & Tablet) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/bg.png.png')",
        }}
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 hidden md:block"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left text-black md:text-white">
          <h2 className="text-4xl font-semibold">Get Yours Today!</h2>
          <p className="mt-4 text-lg">
            Don't wait to experience the best in oral care! Click 'Buy now' to
            secure your favorites and enjoy a brighter, healthier smile.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-300 transition">
            Buy now with 15% off
          </button>
        </div>

        {/* Mobile Image (Visible only on Mobile) */}
        <div className="md:hidden mt-8 flex justify-center">
          <img
            src="/bg.png.png"
            alt="Toothbrush"
            className="w-full max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
