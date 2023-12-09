import React, { useState } from "react";
import { InputBox } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";

const UserAuthForm = ({ pageUrl }) => {
  const navigate = useNavigate();
  let [data, setData] = useState({});
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(document.getElementById("form-submit"));
    const formData = {};

    for (let [key, value] of form) {
      formData[key] = value;
    }
    setData(formData);

    if (pageUrl === "login") {
      console.log("login");
      await fetchData("http://localhost:3000/login");
    } else {
      console.log("logout");
      await fetchData("http://localhost:3000/signup");
    }
  };

  const fetchData = async (url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Success:", result);

      // Set data to empty object only after the fetch request is completed
      setData({});
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-60px)]">
      <div className="bg-slate-200/70 p-16 rounded-lg flex justify-center flex-col items-center gap-3 h-[450px] w-[450px]">
        <h1 className="text-3xl text-center capitalize sm:text-3xl font-inter text-red-400 font-bold mb-[30px]">
          {pageUrl == "login" ? "welcome back" : "continue for signup"}
        </h1>
        <form

          id="form-submit"
          className="flex flex-col items-center justify-center w-[100%] gap-3"
        >
          {pageUrl !== "login" ? (
            <InputBox
              type="text"
              placeholder="username"
              name="username"
              icon={<FaRegUserCircle />}
              id={1}
            ></InputBox>
          ) : (
            ""
          )}
          <InputBox
            type="email"
            placeholder="email"
            name="email"
            icon={<MdOutlineAlternateEmail />}
            id={2}
          ></InputBox>
          <InputBox
            type="password"
            name="password"
            placeholder="password"
            icon={<IoMdKey />}
            id={3}
          ></InputBox>
          <button
            id="btn-submit"
            type="submit"
            className="py-2 px-10 mt-3 bg-primary/80 transition-all ease-in duration-100 hover:bg-primary rounded-full w-max text-white font-bold font-inter"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {pageUrl == "login" ? "login" : "register"}
          </button>
        </form>
        <div className="flex gap-2 w-full items-center relative opacity-30">
          <hr className="border-b-2 w-1/2 border-black" />
          <p>OR</p>
          <hr className="border-b-2 w-1/2 border-black" />
        </div>
        {pageUrl !== "login" ? (
          <div className="flex items-center gap-3 ">
            <p>already account</p>
            <Link to="/login" className="underline text-violetdark">
              Sign in
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <p>Don't have account </p>
            <Link to="/signup" className="underline text-violetdark">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAuthForm;
