import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const reviews = [
    { name: "Sarah Han", text: "After just two weeks, my teeth are noticeably whiter." },
    { name: "Johny Matt", text: "I've tried many toothbrushes over the years, but PureBrush stands out." },
    { name: "Amanda Christen", text: "I love that they're made from sustainable materials." },
    { name: "Amanda Christen", text: "I love that they're made from sustainable materials." },
    { name: "Amanda Christen", text: "I love that they're made from sustainable materials." },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 text-center bg-[#fdfaf3]">
      
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5  gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-[#fdfaf3] w-full max-w-lg mx-auto"
          >
            {/* ⭐ Stars */}
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg italic text-gray-900 max-w-sm">"{review.text}"</p>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
