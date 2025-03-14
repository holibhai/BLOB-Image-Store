import React from "react";
import { Routes, Route } from "react-router-dom";
import DisplayProduct from "./pages/DisplayProduct";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";

                                      
import Home from "./pages/Home";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/displayProduct" element={<DisplayProduct />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
