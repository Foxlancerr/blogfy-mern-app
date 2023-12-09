import React from "react";
import EachBlog from "./BlogDetails";
import blogData from "../constants";
import { Footer, SingleBlog } from "../components";

const Home = () => {
  return (
    <>
      <div className="px-[100px] flex flex-col gap-6">
        <div className="mt-[10rem]">
          <h1 className="text-7xl w-[90%] leading-[80px] font-inter font-medium">
            Uncover <span className="bg-red-300">fresh prespective, ideas</span>{" "}
            and knowledge through the power of blogs.
          </h1>
          <p className="text-2xl w-[70%] mt-10 text-black/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            voluptatem enim officiis cum id rerum ratione corrupti rem! Dicta,
            aspernatur.
          </p>
          <button className="bg-red-300 rounded-md mt-5 px-5 py-3 text-2xl font-bold ">
            Start Reading
          </button>
        </div>
        <div className="mt-[5rem]">
          <h1 className="text-4xl mb-3">Top Articles</h1>
          <hr className="border-red-300 border-2" />
        </div>
        <div className="grid grid-cols-3 gap-10">
          {blogData.map((blog) => (
            <SingleBlog key={blog.key} blog={blog}></SingleBlog>
          ))}
        </div>
        {/* <EachBlog blogData={blogData2[2]}></EachBlog> */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
