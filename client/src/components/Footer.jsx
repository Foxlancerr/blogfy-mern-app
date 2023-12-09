import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex border-t-slate-300 border-t-2 text-xl py-6 md:px-[100px] px-[30px] mt-[10rem] justify-between gap-3">
      <div className="flex md:gap-10 gap-2 items-center md:text-3xl text-1xl">
        <AiFillFacebook className="cursor-pointer"></AiFillFacebook>
        <FaGithub className="cursor-pointer"></FaGithub>
        <BsInstagram className="cursor-pointer"></BsInstagram>
        <IoLogoLinkedin className="cursor-pointer"></IoLogoLinkedin>
      </div>
      <div className="flex md:gap-10 gap-2 items-center capitalize text-[14px] md:text-xl">
        <p className="cursor-pointer hover:border-b-red-400 hover:border-b-2 ">
          Term of Use
        </p>
        <p className="cursor-pointer hover:border-b-red-400 hover:border-b-2 ">
          privacy & policy
        </p>
        <p className="cursor-pointer hover:border-b-red-400 hover:border-b-2 ">
          &copy; 2023 all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
