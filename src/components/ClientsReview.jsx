import React from "react";
import { FaStar } from "react-icons/fa";

const ClientsReview = () => {
  const reviews = [
    { name: "Sarah Han", text: "After just two weeks, my teeth are noticeably whiter." },
    { name: "Johny Matt", text: "I've tried many toothbrushes over the years, but PureBrush stands out." },
    { name: "Amanda Christen", text: "I love that they're made from sustainable materials." },
  ];

  return (
    <section className="w-full bg-[#A3B7B3] py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">
        What Our Clients Say
      </h2>
      {/* Testimonials Grid */}
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  
 w-full max-w-lg mx-auto"
          >
            {/* ⭐ Stars */}
            <div className="flex space-x-1  mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg italic text-gray-900 max-w-sm">"{review.text}"</p>

            {/* Author Name */}
            <p className="text-gray-700 font-medium mt-3">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsReview;
