import React from "react";
import { useParams } from "react-router-dom";
import {Footer} from "../components/index"

const BlogDetails = ({ blogData }) => {
  const { id } = useParams();
  let { title, tagline, keywords, image, contents } = blogData[id];

  return (
    <>
      <div className="px-[100px] flex flex-col gap-6">
        <div className="mt-[15vh] flex justify-center flex-col items-center gap-5">
          <h1 className="text-6xl capitalize font-inter font-medium leading-normal">
            {title}
          </h1>
          <h3 className="text-2xl text-black/60">{tagline}</h3>
          <ul className="flex gap-3">
            {keywords.map((keyword, index) => (
              <li className="bg-gray-200 px-2 py-1 text-center" key={index}>
                {keyword}
              </li>
            ))}
          </ul>
        </div>
        <div className=" bg-red-300 h-[550px] w-[80%] mx-auto">
          <img
            src={image}
            alt="img-tag"
            className="overflow-hidden w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="w-[80%] mx-auto flex gap-4 flex-col mb-[15vh]">
          {contents.map((content, contentIndex) => (
            <div className="" key={contentIndex}>
              {content.heading && (
                <h1 className="text-4xl my-5 text-black/70 font-inter font-medium ">
                  {content.heading}
                </h1>
              )}
              {/* {content.paragraphs[0]} */}
              {content.paragraphs.map((para, paraIndex) => (
                <p
                  className={`mb-2 ${
                    contentIndex === 0 && paraIndex === 0
                      ? "text-4xl font-medium bg-red-200"
                      : "text-[20px]"
                  }`}
                  key={paraIndex}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default BlogDetails;
