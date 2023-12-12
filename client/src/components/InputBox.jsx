import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

const InputBox = ({ type, placeholder, icon, id, value, name }) => {
  let [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
       {/* <div className="flex gap-4 md:flex-row md:items-center md:justify-between mb-4 flex-col">
            
            <input
              type="text"
              id="heading2"
              name="heading2"
              placeholder="heading2 here..."
              className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 py-4 md:w-[80%] w-full "
            />
          </div> */}

      {/* <div className="relative border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 py-4 md:w-[80%] w-full "> */}
      <div className="relative p-2 bg-primary/10 hover:bg-primary/30 transition-all ease-in flex justify-between gap-3 rounded-md w-full">
        <span className="grid place-items-center text-slate-500 text-[20px] font-medium">
          {icon}
        </span>
        <input
          autoComplete="true"
          defaultValue={value}
          id={id}
          type={
            type === "password" ? (passwordVisible ? "text" : "password") : type
          }
          name={name}
          placeholder={placeholder}
          // className="border-none outline-none bg-transparent"
          className="border-none outline-none bg-transparent"
        />
        {type == "password" && (
          <span className="absolute right-2 top-[10px] grid place-items-center text-slate-500 text-[20px] font-medium pointer-events-auto">
            {passwordVisible ? (
              <IoEyeOutline
                className="cursor-pointer"
                onClick={() => {
                  setPasswordVisible((prevState) => !prevState);
                }}
              />
            ) : (
              <FaRegEyeSlash
                className="cursor-pointer"
                onClick={() => {
                  setPasswordVisible((prevState) => !prevState);
                }}
              />
            )}
          </span>
        )}
      </div>
    </>
  );
};

export default InputBox;
