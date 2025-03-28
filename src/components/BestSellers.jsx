import React from "react";

const products = [
  {
    id: 1,
    name: "PureClean Toothbrush",
    price: "$138",
    description: "Featuring ultra-soft bristles that gently sweep away plaque and debris.",
    image: "/Rectangle 29.png"
  },
  {
    id: 2,
    name: "Product Name",
    price: "$138",
    description: "Short description of the product or service of the website",
    image: "/Rectangle 33.png"
  },
  {
    id: 3,
    name: "Product Name",
    price: "$138",
    description: "Short description of the product or service of the website",
    image: "/Rectangle 36.png"
  }
];

const BestSellers = () => {
  return (
    <section className="bg-[#A9B9B4] py-12 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-900">Explore our best-sellers</h2>
      <p className="text-gray-700 mt-2">
        Each product is crafted with the finest materials and backed by rave reviews from our loyal customers.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-[#F5F2EB]  shadow-md p-4">
            <img src={product.image} alt={product.name} className="w-full h-auto " />
            <div className="mt-4 text-left">
              <div className="flex justify-between items-center font-semibold text-gray-900">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <button className="mt-4 w-full bg-teal-900 text-white py-2 rounded-md hover:bg-teal-700 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
