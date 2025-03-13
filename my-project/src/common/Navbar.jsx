import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="sticky top-0">
          <nav className="flex justify-between items-center p-5 ">
            <div>
              <h1 className="text-2xl font-bold text-gray-700">BLOG-IMAGE-<span className="text-rose-400">GALLERY</span></h1>
            </div>
            <ul className="flex justify-center items-center gap-10 text-gray-700">
              <li className="hover:text-rose-400 transition-all">
                <a href="#">
                  <NavLink to="/">Home</NavLink>
                </a>
              </li>
              <li  className="hover:text-rose-400 transition-all">
                <a href="#">
                  <NavLink to="/addProduct">AddProduct</NavLink>
                </a>
              </li>

              <li  className="hover:text-rose-400 transition-all">
                <a href="#">
                  <NavLink to="/displayProduct">DisplayProduct</NavLink>
                </a>
              </li>
 
            </ul>
            <div>
                   <button className="text-xl bg-rose-400 px-3 py-2  rounded-lg border-none text-white">Login</button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
