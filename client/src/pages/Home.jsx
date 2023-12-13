import React, { useContext } from "react";
import { Footer, SingleBlogV1, SingleBlogV2 } from "../components";
import { GlobalContext } from "../context/GlobalContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { allBlogsGetFromDB, userAuth } = useContext(GlobalContext);
  return (
    <>
      <div className="md:px-[100px] px-[20px] flex flex-col gap-6">
        <div className="mt-[10rem]">
          <h1 className="md:text-7xl text-4xl w-[90%] font-inter font-medium">
            Uncover <span className="bg-red-300">fresh prespective, ideas</span>{" "}
            and knowledge through the power of blogs.
          </h1>
          <p className="text-2xl md:text-xl w-[70%] mt-10 text-black/60">
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
          <hr className="border-black/50 border-1" />
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {allBlogsGetFromDB.map((blog) => (
            <SingleBlogV1 key={blog.key} blog={blog}></SingleBlogV1>
          ))}
        </div>

        <div className="mt-[5rem]">
          <h1 className="text-4xl mb-3">Latest Articles</h1>
          <hr className="border-black/50 border-1" />
        </div>
        <div className=" bg-red-600"></div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
