import React from "react";
import { InputBox } from "../components";
import { Link } from "react-router-dom";

const UserAuthForm = ({ pageUrl }) => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-60px)] bg-violetlight">
      <div className="bg-slate-100/70 p-16 rounded-lg flex justify-center flex-col items-center gap-3 h-[450px] w-[400px]">
        <h1 className="text-3xl text-center capitalize sm:text-3xl font-inter text-violetdark font-bold mb-[30px]">
          {pageUrl == "login" ? "welcome back" : "continue for signup"}
        </h1>
        <form className="flex flex-col items-center  max-[400px] gap-3">
          {pageUrl !== "login" ? (
            <InputBox
              type="text"
              placeholder="username"
              icon="user"
              id={1}
            ></InputBox>
          ) : (
            ""
          )}
          <InputBox
            type="email"
            placeholder="email"
            icon="email"
            id={2}
          ></InputBox>
          <InputBox
            type="password"
            placeholder="password"
            icon="password"
            id={3}
          ></InputBox>
          <button type="submit" className="py-2 px-10 mt-3 bg-primary/80 transition-all ease-in duration-100 hover:bg-primary rounded-full w-max text-white font-bold font-inter">{pageUrl == "login" ? "login" : "register"}</button>
        </form>
        <div className="flex gap-2 w-full items-center relative opacity-30">
          <hr className="border-b-2 w-1/2 border-black" />
          <p>OR</p>
          <hr className="border-b-2 w-1/2 border-black" />
        </div>
        {pageUrl !== "login" ? (
          <div className="flex items-center gap-3 ">
            <p>already account</p>
            <Link to="/login" className="underline text-violetdark">Sign in</Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <p>Don't have account </p>
            <Link to="/signup" className="underline text-violetdark">Sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAuthForm;
