import React from "react";
import { Link } from "react-router-dom";

const SingleBlogV2 = ({ blog }) => {
    
  console.log(blog);
  return (
    <Link to={`/blog/${blog.key}`} className=" flex md:gap-5 gap-4 items-start relative bg-slate-500 rounded overflow-hidden">
      <div className=" bg-red-300">
        <img
          src={blog.coverImage}
          alt="image1"
          className="object-cover w-[100%] h-[100%]"
        />
      </div>
      <div className="bg-slate-300/60 absolute bottom-0">
      {blog.keywords.map((keyword, index) => (
          <span
            key={index}
            className="md:text-[14px] hidden text-[10px] md:mr-2 mr-1 md:inline-block bg-slate-200 md:px-2 px-1 font-medium uppercase"
          >
            {keyword}
          </span>
        ))}
        <h1 className="md:text-3xl text-1xl w-[80%] my-4 capitalize font-bold">{blog.title}</h1>
        <p className=" text-black/70 md:text-[1.2rem] text-[12px] font-semibold">{blog.contents[0].paragraphs[0]}</p>
       
      </div>
    </Link>
  );
};

export default SingleBlogV2;
