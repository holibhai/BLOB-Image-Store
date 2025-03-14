import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    price: "",
    catagorie: "",
    country: "",
    image: "", // Holds image URL from DB
  });

  const [image, setImage] = useState(null); 

  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/api/product/get/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    }
    fetchData();
  }, [id]);

  
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  
  const handleFileChange = (e) => {
    setImage(e.target.files[0]); 
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("product", new Blob([JSON.stringify(product)], { type: "application/json" }));
    
    if (image) {
      formData.append("file", image);
    }

    try {
      await axios.put(`http://localhost:8080/api/product/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product updated successfully!");
      navigate("/displayproduct");
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Update Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        
        <div>
          <label className="block text-sm font-medium text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="catagorie"
            value={product.catagorie}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={product.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

    
        {product.image && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Image</label>
            <img src={product.image} alt="Product" className="mt-1 w-40 h-40 object-cover rounded-md" />
          </div>
        )}

        
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload New Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

      
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
