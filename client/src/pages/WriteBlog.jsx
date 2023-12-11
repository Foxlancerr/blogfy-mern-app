import React, { useContext } from "react";
import { SingleBlog } from "../components";
import blogData from "../constants";
import { GlobalContext } from "../context/GlobalContext.jsx";

const WriteBlog = () => {
  const { formHandler } = useContext(GlobalContext);

  return (
    <div className="md:px-[100px] px-[20px] flex my-[5rem] gap-10">
      {/* form */}
      <div className="md:w-[70%] w-[100%]">
        <h1 className="md:text-7xl text-5xl w-[90%] leading-[80px] font-inter font-medium capitalize mb-10">
          write your <span className="bg-red-300">Blogs</span>{" "}
        </h1>
        <form id="writeBlog-form">
          <div className="flex gap-4 md:flex-row md:items-center md:justify-between mb-4 flex-col">
            <label
              htmlFor="title"
              className="mr-2 md:text-3xl text-2xl capitalize "
            >
              title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title here..."
              className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 md:py-4 py-3 md:w-[80%] w-full "
            />
          </div>
          <div className="flex gap-4 md:flex-row md:items-center md:justify-between mb-4 flex-col">
            <label
              htmlFor="tagline"
              className="mr-2 md:text-3xl text-2xl capitalize "
            >
              Tagline
            </label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              placeholder="tagline here..."
              className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 py-4 md:w-[80%] w-full "
            />
          </div>
          <div className="flex gap-4 md:flex-row md:items-center md:justify-between mb-4 flex-col">
            <label
              htmlFor="keywords"
              className="mr-2 md:text-3xl text-2xl capitalize "
            >
              keywords
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="Write keywordss (comma-separated):"
              className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 py-4 md:w-[80%] w-full "
            />
          </div>
          <div className="flex gap-4 md:flex-row md:items-center md:justify-between mb-4 flex-col">
            <label htmlFor="file" className="mr-2 text-3xl capitalize ">
              File
            </label>
            <input
              type="file"
              id="file"
              name="coverImage"
              className="border-none outline-none md:text-2xl text-1xl bg-slate-100 px-3 py-3 md:py-4 md:w-[80%] w-full "
            />
          </div>

          <div className="flex gap-4 md:flex-row md:justify-between mb-4 flex-col">
            <label htmlFor="mainparagraph" className="mr-2 text-3xl capitalize ">
              main paragraph
            </label>
            <textarea
              id="mainparagraph"
              name="mainParagraph"
              rows="5"
              cols="50"
              placeholder="Type main paragraph here ..."
              className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 md:py-2 py-3 md:w-[80%] w-full "
            ></textarea>
          </div>

          <div className="flex gap-4 md:flex-row md:items-center md:justify-between mb-4 flex-col">
            <label
              htmlFor="heading1"
              className="mr-2 md:text-3xl text-2xl capitalize "
            >
              heading1
            </label>
            <input
              type="text"
              id="heading1"
              name="heading1"
              placeholder="heading1 here..."
              className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 py-4 md:w-[80%] w-full "
            />
          </div>

          <div className="flex gap-4 md:flex-row md:justify-between mb-4 flex-col">
            <label htmlFor="paragraph1" className="mr-2 text-3xl capitalize ">
              paragraph1
            </label>
            <textarea
              id="paragraph1"
              name="paragraph1"
              rows="5"
              cols="50"
              placeholder="Type paragraph2 here ..."
              className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 md:py-2 py-3 md:w-[80%] w-full "
            ></textarea>
          </div>
          <div className="flex gap-4 md:flex-row md:items-center md:justify-between mb-4 flex-col">
            <label
              htmlFor="heading2"
              className="mr-2 md:text-3xl text-2xl capitalize "
            >
              heading2
            </label>
            <input
              type="text"
              id="heading2"
              name="heading2"
              placeholder="heading2 here..."
              className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 py-4 md:w-[80%] w-full "
            />
          </div>

          <div className="flex gap-4 md:flex-row md:justify-between mb-4 flex-col">
            <label htmlFor="paragraph2" className="mr-2 text-3xl capitalize ">
              paragraph2
            </label>
            <textarea
              id="paragraph2"
              name="paragraph2"
              rows="5"
              cols="50"
              placeholder="Type paragraph2 here ..."
              className="border-none outline-none md:text-2xl text-1xl placeholder:capitalize bg-slate-100 px-3 md:py-2 py-3 md:w-[80%] w-full "
            ></textarea>
          </div>

          <button
            className="font-meduim mt-3 py-3 px-6 bg-red-400 hover:bg-red-400/90 rounded font-semibold w-full text-3xl"
            onClick={(e) => {
              const id = document.getElementById("writeBlog-form");
              formHandler(e, id, "writeBlogForm");
            }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* left sidebar */}
      <div className="hidden md:grid grid-cols-1 gap-10 w-[30%]">
        {blogData.map((blog, index) => {
          if (index > 2) return "";
          else return <SingleBlog key={blog.key} blog={blog}></SingleBlog>;
        })}
      </div>
    </div>
  );
};

export default WriteBlog;
