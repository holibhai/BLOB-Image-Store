import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { NotebookPen } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Product = ({ product,index }) => {
  const [message, setMessage] = useState("");
  const navigate =useNavigate()

  const handleDelete = async (index) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/product/delete/${index}`
      );
      setMessage("✅ Product deleted successfully!");
    } catch (err) {
      setMessage("❌ Failed to delete product.");
    }
  };
   
   const handleUpdate = (id) => {
    // Implement update functionality here
    navigate(`/updateProduct/${id}`);
  };

  return (
    <div>
      {message && <p className={`mt-4 ${message.includes("✅") ? "text-green-400" : "text-red-400"}`}>{message}</p>}

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-[250px] hover:shadow-2xl transition-shadow duration-300 m-5 bg-neutral-200">
      {/* Product Image */}
      <img
        src={`data:${product.imageType};base64,${product.imageData}`}
        alt={product.category}
        className="w-full h-60 object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {product.category}
        </h2>

        <div className="text-gray-500 mb-2">
          <p className="text-sm">Country: {product.country}</p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-blue-600 mt-2">
              ${product.price}
            </p>
            <div className="flex gap-5">
              <Trash2 className="text-red-500" onClick={()=>handleDelete(product.id)} />
              <NotebookPen className="text-green-500" onClick={()=>handleUpdate(product.id)} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Product;
