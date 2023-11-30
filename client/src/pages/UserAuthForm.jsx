import React from "react";
import { InputBox } from "../components";

const UserAuthForm = ({ pageUrl }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-red-300  bg-violetlight">
      <h1 className="text-2xl sm:text-3xl font-inter font-bold mb-3">
        {pageUrl == "login" ? "welcome back" : "continue for signup"}
      </h1>
      <form className="flex gap-2 flex-col">
        <InputBox type="text" placeholder="username" icon="user"></InputBox>
        <InputBox type="text" placeholder="username" icon="user"></InputBox>
      </form>
    </div>
  );
};

export default UserAuthForm;
