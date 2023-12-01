import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

const InputBox = ({ type, placeholder, icon, id, value }) => {
  let [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="relative p-2 bg-primary/10 hover:bg-primary/30 transition-all ease-in flex justify-between gap-3 rounded-md w-full">
      <span className="grid place-items-center text-slate-500 text-[20px] font-medium">
        {icon}
      </span>
      <input
        defaultValue={value}
        id={id}
        type={
          type === "password" ? (passwordVisible ? "text" : "password") : type
        }
        placeholder={placeholder}
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
  );
};

export default InputBox;
