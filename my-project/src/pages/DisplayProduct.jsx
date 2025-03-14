import React, { useEffect, useState } from "react";
import p from "../assets/g-4.jpg";
import Product from "./Product";
import axios from "axios";

const DisplayProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/product/get"
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchdata();
  }, [product]);
  return (
    <>
      {product.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center px-36 py-10">
          {product.map((product, index) => (
            <div key={index} className="">
              <Product product={product} index={index} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg shadow-md">
          <span className="text-gray-500 text-2xl font-semibold mt-2">
            No products found
          </span>
          <p className="text-gray-400 text-sm mt-2">
            Try adjusting your filters or search for something else.
          </p>
        </div>
      )}
    </>
  );
};

export default DisplayProduct;
