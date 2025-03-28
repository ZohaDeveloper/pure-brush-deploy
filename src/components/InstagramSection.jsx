import React from "react";

const InstagramSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center bg-[#F5F2EB] ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative">
        <img
          src="/Rectangle9.png" // Replace with your actual image URL
          alt="Oral Health"
          className="w-full h-auto "
        />
        {/* View Products Button (Absolute for positioning) */}
       
      </div>

      {/* Text Section */}
      <div className="w-full px-16 md:w-1/2 text-center md:text-left p-6">
        <h2 className="text-3xl font-semibold text-gray-900">Improved Oral Health</h2>
        <p className="text-gray-700 mt-3">
          Maintain good oral hygiene by preventing tooth decay, <br className="hidden md:block" />
          and reducing the risk of gum disease.
        </p>
        {/* Shop Now Button */}
        <button className="mt-6 bg-[#00473E] text-white px-6 py-3 rounded-lg hover:bg-[#00332D]">
          Shop Now
        </button>
      </div>
      
    </section>
    


    
  );
};

export default InstagramSection;
