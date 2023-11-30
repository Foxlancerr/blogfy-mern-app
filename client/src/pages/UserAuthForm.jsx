import React from "react";
import { InputBox } from "../components";
import { Link } from "react-router-dom";

const UserAuthForm = ({ pageUrl }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-violetlight">
      <h1 className="text-2xl sm:text-3xl font-inter font-bold mb-3">
        {pageUrl == "login" ? "welcome back" : "continue for signup"}
      </h1>
      <form className="flex gap-2 flex-col">
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
      <div className="flex gap-2">
        <hr className="h-[2px]" />
        <p>OR</p>
        <hr />
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
