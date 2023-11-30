import React from "react";

const InputBox = ({ type, placeholder, icon }) => {
  return (
    <div className="bg-slate-300/30 p-3 flex justify-between gap-3 rounded-md">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="border-none outline-none bg-transparent"
      />
    </div>
  );
};

export default InputBox;
