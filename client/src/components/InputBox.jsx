import React from "react";

const InputBox = ({ type, placeholder, icon, id, value }) => {
  return (
    <div className="relative p-2 bg-primary/10 hover:bg-primary/30 transition-all ease-in flex justify-between gap-3 rounded-md w-full">
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
