import React, { useContext, useEffect, useState } from "react";
import { Outlet, NavLink, Link, Navigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import logo from "../assets/logo.png";
import { GlobalContext } from "../context/GlobalContext.jsx";
import { clearAllDataFromSession } from "../utils/sessionStorage.js";

const Navbar = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const { userAuth, setUserAuth, allBlogsGetFromDB, setAllBlogsGetFromDB } =
    useContext(GlobalContext);

    console.log(allBlogsGetFromDB);

  const signOutUser = () => {
    clearAllDataFromSession();
    setUserAuth(false);
    setToggleNavigation(false);
  };

  const filterData = allBlogsGetFromDB.slice(0)
  useEffect(() => {
    console.log(searchQuery);
    const filteredBlogs = filterData.filter((blog) =>
      blog.keywords.includes(searchQuery)
    );
    console.log(filteredBlogs);

    // setAllBlogsGetFromDB(filteredBlogs);
  }, [searchQuery]);

  return (
    <>
      <nav className="flex justify-between items-center bg-slate-100/60 py-4 md:px-[100px] px-[20px] relative w-[100%]">
        {/* logo is setted */}
        <div className="flex gap-5 items-center ">
          <Link
            to="/"
            className="w-[150px] cursor-pointer overflow-hidden object-cover"
          >
            <img src={logo} alt="logo" />
          </Link>
          <ul className="hidden md:flex gap-3 items-center ">
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>

        {/* search and munu icons */}
        <div className="flex md:hidden items-center gap-3">
          <div
            className="flex bg-slate-200 p-2 rounded-full cursor-pointer"
            onClick={() => {
              setOpenSearch((prev) => !prev);
            }}
          >
            <IoSearch className="text-2xl" />
          </div>

          <div
            className="flex text-2xl cursor-pointer"
            onClick={() => {
              setToggleNavigation((prev) => !prev);
            }}
          >
            <LuMenu></LuMenu>
          </div>
        </div>

        {/* search | login btn | write */}
        <div className=" hidden md:flex gap-4">
          <div className="gap-2 flex bg-slate-200 items-center rounded-full px-3 py-2">
            <IoSearch className="text-2xl" />
            <input
              className="bg-transparent border-none outline-none"
              type="search"
              name="search"
              id=""
              placeholder="Search here..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>

          <Link
            to="/signin"
            className="bg-black text-white py-2 px-5 rounded-full font-bold"
            onClick={signOutUser}
          >
            Logout
          </Link>

          <Link
            to="/write"
            className="cursor-pointer flex gap-2 bg-red-300 font-medium py-2 px-3 rounded justify-center items-center"
          >
            <CiEdit className="text-2xl"></CiEdit>
            <p className="text-xl">Write</p>
          </Link>
        </div>

        {/* for mobile device */}
        <div
          className={`absolute top-[15vh] w-[80%] left-[10%] md:hidden block ${
            openSearch ? "block" : "hidden"
          }`}
        >
          <div className="gap-2 flex bg-slate-200 items-center rounded-full px-3 py-2">
            <IoSearch className="text-2xl" />
            <input
              className="bg-transparent border-none outline-none"
              type="search"
              name="search"
              id=""
              placeholder="Search here..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          className={`md:hidden absolute right-2 top-20  flex-col gap-3 bg-slate-100 py-10 px-4 rounded ${
            toggleNavigation ? "flex" : "hidden"
          }`}
        >
          <ul className="md:hidden flex gap-3 flex-col">
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>

          <Link
            to="/write"
            className="flex gap-2 bg-red-300 font-medium py-2 px-3 rounded cursor-pointer items-center"
          >
            <CiEdit className="text-2xl"></CiEdit>
            <p className="text-xl">Write</p>
          </Link>
          <Link
            to="/signin"
            className="bg-black text-white py-2 px-5 rounded-full font-bold"
            onClick={signOutUser}
          >
            Logout
          </Link>
        </div>
      </nav>
      {/* {userAuth ? <Outlet></Outlet>: <Navigate to="/signin"/>} */}
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
