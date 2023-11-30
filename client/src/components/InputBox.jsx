import React from "react";

const InputBox = ({ type, placeholder, icon, id, value }) => {
  return (
    <div className="relative p-2 bg-slate-200/20 hover:bg-slate-200/40 transition-all ease-in flex justify-between gap-3 rounded-md">
      {icon}
      <input
        defaultValue={value}
        id={id}
        type={type}
        placeholder={placeholder}
        className="border-none outline-none bg-transparent"
      />
    </div>
  );
};

export default InputBox;
