import React from "react";
import EachBlog from "./EachBlog";
import {blogData2} from "../constants";

const Home = () => {
  // console.log(blogData)
  return (
    <div>
      <EachBlog blogData={blogData2[2]}></EachBlog>
    </div>
  );
};

export default Home;
