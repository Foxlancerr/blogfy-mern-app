import React from 'react';
import { Outlet } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className=' bg-violetdark text-primary'>
      <h1 className='w-full p-2 text-center'>Navbar</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;
