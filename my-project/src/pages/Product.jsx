import React from "react";

const Product = ({ product }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-[300px] hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={product.img}
        alt={product.category}
        className="w-full h-60 object-cover rounded-t-lg"
      />

      {/* Product Details */}
      <div className="p-4">
        {/* Category */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.category}</h2>
        
        {/* Price and Country */}
        <div className="text-gray-500 mb-2">
          <p className="text-sm">Country: {product.country}</p>
          <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
        </div>

        {/* Buy Now Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
