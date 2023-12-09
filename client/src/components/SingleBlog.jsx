import React from "react";
import image1 from "../assets/img1.jpg";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <Link className="flex flex-col my-2">
      <div className=" bg-red-300">
        <img src={image1} alt="image1" className="object-cover" />
      </div>
      <div className="mt-3">
        <h3 className="text-[20px] text-red-400 font-medium uppercase">keyword</h3>
        <h1 className="text-3xl mt-2 capitalize font-medium">
          what is web design? A comprehensive guide
        </h1>
      </div>
    </Link>
  );
};

export default SingleBlog;
