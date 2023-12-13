import React from "react";
import { useParams } from "react-router-dom";
import {Footer} from "../components/index"

const BlogDetails = ({ allBlogsGetFromDB }) => {
  const route = useParams();
  const { id } = useParams();
  console.log(route);
  let { title, tagline, keywords, coverImage, contents } = allBlogsGetFromDB[id];

  return (
    <>
      <div className="md:px-[100px] px-[30px] flex flex-col gap-6">
        <div className="mt-[15vh] flex justify-center flex-col items-center gap-5">
          <h1 className="md:text-6xl text-4xl capitalize font-inter font-medium leading-normal">
            {title}
          </h1>
          <h3 className="md:text-2xl text-xl text-black/60">{tagline}</h3>
          <ul className="flex gap-3">
            {keywords.map((keyword, index) => (
              <li className="bg-gray-200 px-2 py-1 text-center" key={index}>
                {keyword}
              </li>
            ))}
          </ul>
        </div>
        <div className=" bg-red-300 md:h-[550px] h-[250px] md:w-[80%] w-[90%] mx-auto">
          <img
            src={coverImage}
            alt="img-tag"
            className="overflow-hidden w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto flex gap-4 flex-col mb-[15vh]">
          {contents.map((content, contentIndex) => (
            <div className="" key={contentIndex}>
              {content.heading && (
                <h1 className="text-3xl md:text-4xl my-5 text-black/70 font-inter font-medium ">
                  {content.heading}
                </h1>
              )}
              {/* {content.paragraphs[0]} */}
              {content.paragraphs.map((para, paraIndex) => (
                <p
                  className={`mb-2 ${
                    contentIndex === 0 && paraIndex === 0
                      ? "md:text-4xl text-3xl font-medium bg-red-200"
                      : "md:text-[20px] text-[18px]"
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
