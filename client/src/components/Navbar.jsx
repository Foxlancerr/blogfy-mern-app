import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-slate-100/60 py-4 px-[100px]">
        <div className="flex gap-5 items-center ">
          <div className="w-[150px] overflow-hidden object-cover">
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex gap-3 items-center ">
            <li>
              <NavLink to="/" className="text-2xl">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center ">
          <div className="flex gap-2 bg-slate-200 items-center rounded-full px-3 py-2">
            <IoSearch className="text-2xl" />
            <input
              className="bg-transparent border-none outline-none"
              type="search"
              name="search"
              id=""
              placeholder="Search here..."
            />
          </div>
          <button className="bg-black text-white py-2 px-5 rounded-full font-bold" onClick={()=>{console.log("hello");}}>
            Logout
          </button>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
