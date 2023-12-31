import React, { useContext, useState } from "react";
import { InputBox } from "../components/index.js";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GlobalContext } from "../context/GlobalContext.jsx";

const SignInUserForm = ({ pageUrl }) => {
  const navigate = useNavigate();
  let [data, setData] = useState({});
  // console.log(data);

  const { formHandler, setUserAuth, userAuth } = useContext(GlobalContext);

  return userAuth === true ? (
    <Navigate to="/" />
  ) : (
    <div className="flex justify-center items-center h-[calc(100vh-60px)]">
      <div className="bg-slate-200/70 p-16 rounded-lg flex justify-center flex-col items-center gap-3 h-[450px] w-[450px]">
        <h1 className="text-3xl text-center capitalize sm:text-3xl font-inter text-red-400 font-bold mb-[30px]">
          welcome back
        </h1>
        <form
          id="sign-in-form"
          className="flex flex-col items-center justify-center w-[100%] gap-3"
        >
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
              const id = document.getElementById("sign-in-form");
              formHandler(e, id, "sign-in");
            }}
          >
            login
          </button>
        </form>
        <div className="flex gap-2 w-full items-center relative opacity-30">
          <hr className="border-b-2 w-1/2 border-black" />
          <p>OR</p>
          <hr className="border-b-2 w-1/2 border-black" />
        </div>

        <div className="flex items-center gap-3 ">
          <p>already account</p>
          <Link to="/signup" className="underline text-violetdark">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInUserForm;
