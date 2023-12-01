import React from "react";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className=" bg-violetdark text-primary h-[60px]">
        <h1 className="">Navbar</h1>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
