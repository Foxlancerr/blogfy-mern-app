import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.key}`} className="flex flex-col">
      <div className=" bg-red-300 h-[250px]">
        <img
          src={blog.coverImage}
          alt="image1"
          className="object-cover w-[100%] h-[100%]"
        />
      </div>
      <div className="mt-5">
        {blog.keywords.map((keyword, index) => (
          <span
            key={index}
            className="text-[16px] mr-2 inline-block mb-2 bg-slate-200 px-2 py-1 font-medium uppercase"
          >
            {keyword}
          </span>
        ))}
        <h1 className="text-3xl mt-2 capitalize font-medium">{blog.title}</h1>
      </div>
    </Link>
  );
};

export default SingleBlog;
