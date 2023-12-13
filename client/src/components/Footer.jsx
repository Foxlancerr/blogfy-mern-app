import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className=" mt-[10rem] flex flex-col md:px-[100px] px-[20px]">
      {/* top footer */}
      <div className="grid md:grid-cols-3 grid-cols-1 p-8 rounded-lg gap-[3rem] mb-6 bg-slate-200/30">
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-[180px] cursor-pointer overflow-hidden object-cover ml-[-24px]"
          >
            <img src={logo} alt="logo" />
          </Link>

          <p className="text-2xl md:text-xl w-[90%] text-black/60 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            possimus provident impedit ad dicta saepe? Fuga delectus quisquam
            eum soluta.
          </p>
        </div>
        <div className="  hidden md:flex flex-col gap-2">
          <h1 className="md:text-4xl font-medium text-2xl mb-3 ">
            Our Socail Links
          </h1>
          <Link className="flex gap-3 items-center mt-5 text-2xl">
            <FaGithub></FaGithub>
            <p className="text-3xl md:text-2xl w-[90%] text-black/60 font-medium">
              www.github.com
            </p>
          </Link>
          <Link className="flex gap-3 items-center text-2xl">
            <AiFillFacebook></AiFillFacebook>
            <p className="text-2xl md:text-xl w-[90%] text-black/60 font-medium">
              www.facebook.com
            </p>
          </Link>
          <Link className="flex gap-3 items-center text-4xl">
            <IoLogoLinkedin></IoLogoLinkedin>
            <p className="text-2xl md:text-xl w-[90%] text-black/60 font-medium">
              www.linkiden.in
            </p>
          </Link>
        </div>
        <div>
          <h1 className="md:text-4xl font-medium text-2xl mb-10 ">
            Subscribe Newslater
          </h1>
          <div className="flex gap-3 flex-col justify-start">
            <div className="flex flex-col gap-4 md:items-center text-2xl md:justify-between">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="write your email"
                className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-200 px-5 md:py-4 py-3  rounded-lg w-full "
              />
            </div>
            <button className="bg-black/80 w-max rounded-lg text-xl px-5 py-3 text-white font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* bottom footer */}
      <div className="flex border-t-slate-300 px-5  border-t-2 text-xl py-6 justify-between gap-3 flex-wrap">
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
    </div>
  );
};

export default Footer;
