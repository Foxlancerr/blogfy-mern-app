import React from "react";
import { InputBox } from "../components";
import { Link } from "react-router-dom";

const UserAuthForm = ({ pageUrl }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-violetlight">
      <h1 className="text-3xl text-center capitalize sm:text-3xl font-inter font-bold mb-[42px]">
        {pageUrl == "login" ? "welcome back" : "continue for signup"}
      </h1>
      <form className="flex flex-col  max-[400px] gap-4">
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
        <button>{pageUrl == "login" ? "login" : "register"}</button>
      </form>
      <div className="flex gap-2 w-full items-center relative opacity-50">
        <hr className="border-b-2 w-1/2" />
        <p>OR</p>
        <hr className="border-b-2 w-1/2"/>
      </div>
      {pageUrl !== "login" ? <div>
        <p>already account</p>
        <Link to="/login">Sign in</Link>
      </div> : <div>
      <p>no account</p>
        <Link to="/signup">Sign up</Link>
        </div>}
    </div>
  );
};

export default UserAuthForm;
