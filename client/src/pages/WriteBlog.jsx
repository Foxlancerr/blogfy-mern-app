import React from "react";
import { SingleBlog } from "../components";
import blogData from "../constants";

const WriteBlog = () => {
  return (
    <div className="md:px-[100px] px-[20px] flex mt-[5rem] gap-10">
      <div className="w-[70%]">
        <h1 className="text-7xl w-[90%] leading-[80px] font-inter font-medium capitalize mb-10">
          write your <span className="bg-red-300">Blogs</span>{" "}
        </h1>
        <form>
          <div className="flex gap-4 items-center justify-between mb-4">
            <label htmlFor="title" className="mr-2 text-3xl capitalize ">
              title
            </label>
            <input
              type="text"
              id="title"
              placeholder="title here..."
              className="border-none outline-none text-2xl placeholder:capitalize bg-slate-100 px-3 py-2 w-[80%] "
            />
          </div>
          <div className="flex gap-4 items-center justify-between mb-4">
            <label htmlFor="tagline" className="mr-2 text-3xl capitalize ">
              Tagline
            </label>
            <input
              type="text"
              id="tagline"
              placeholder="tagline here..."
              className="border-none outline-none text-2xl placeholder:capitalize bg-slate-100 px-3 py-2 w-[80%] "
            />
          </div>
          <div className="flex gap-4 items-center justify-between mb-4">
            <label htmlFor="file" className="mr-2 text-3xl capitalize ">
              File
            </label>
            <input
              type="file"
              id="file"
              className="border-none outline-none text-2xl bg-slate-100 px-3 py-2 w-[80%] "
            />
          </div>
          <div className="flex gap-4 items-center justify-between mb-4">
            <label htmlFor="contents" className="mr-2 text-3xl capitalize ">
              Contents
            </label>
            <input
              type="text"
              id="contents"
              placeholder="Contents here..."
              className="border-none outline-none text-2xl placeholder:capitalize bg-slate-100 px-3 py-2 w-[80%] "
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-10 w-[30%]">
        {blogData.map((blog, index) => {
          if (index > 2) return "";
          else return <SingleBlog key={blog.key} blog={blog}></SingleBlog>;
        })}
      </div>
    </div>
  );
};

export default WriteBlog;
