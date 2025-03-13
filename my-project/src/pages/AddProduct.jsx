import React, { useState } from "react";
import p from "../assets/g-4.jpg";

const AddProduct = () => {
  const [image, setImage] = useState(null);

  const [formData,setFormData] = useState({
    
    price: "",
    country: "",
    category: "",
  });
 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert("Image uploaded successfully!");
  };

  const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormData({...formData,[name]:value});
  }

  return (
    <div className="px-32 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Upload an Image
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image Upload */}
            <div>
              <label className="block font-medium text-gray-700">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
                required
              />
              {image && (
                <img
                  src={image}
                  alt="Preview"
                  className="mt-2 w-full h-40 object-cover rounded-lg"
                />
              )}
            </div>

            {/* Image Category */}
            <div>
              <label className="block font-medium text-gray-700">
                Image Category
              </label>
              <select
                value={formData.category}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
                required
              >
                <option value="">Select Category</option>
                <option value="Nature">Nature</option>
                <option value="Technology">Technology</option>
                <option value="People">People</option>
                <option value="Animals">Animals</option>
              </select>
            </div>

            {/* Image Price */}
            <div>
              <label className="block font-medium text-gray-700">
                Image Price ($)
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter price"
                required
              />
            </div>

            {/* Image Country */}
            <div>
              <label className="block font-medium text-gray-700">
                Image Country
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter country"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Upload Image
            </button>
          </form>
        </div>
        <div className="p-5">
                <img src={p} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
