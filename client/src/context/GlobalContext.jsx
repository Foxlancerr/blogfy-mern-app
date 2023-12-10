import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blogData from "../constants";
import {
  getDataFromSession,
  clearAllDataFromSession,
  storeDataInSession,
  removeDataFromSession,
} from "../utils/sessionStorage";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  let [auth, setAuth] = useState(false);
  let [formDataSaved, setFormDataSaved] = useState({});
  console.log(formDataSaved);
  let [blogPost, setBlogPost] = useState({});

  // useEffect(() => {
  //   arrangeDataFromSavingInDB();
  //   console.log(blogPost);
  // }, [blogPost]);

  const arrangeDataFromSavingInDB = () => {
    console.log(formDataSaved);
    // let { title, tagline, keywords, coverImage, contents } = formDataSaved;
    // console.log(title,tagline,keywords);

    let keywordCheck;

    // if (!keywords?.includes(",")) {
    //   keywordCheck = [keywords];
    // } else {
    //   // Split the string with a comma and trim each keyword
    //   keywordCheck = keywords?.split(",").map((word) => word.trim());
    //   console.log(keywordCheck);
    // }

    // const blogFormat = {
    //   key: Date.now(),
    //   keywords: [...keywordCheck],
    //   coverImage: "",
    //   title: title,
    //   tagline: tagline,
    //   contents: [
    //     {
    //       heading: "",
    //       paragraphs: [],
    //     },
    //   ],
    // };
    // setBlogPost(blogFormat);
  };
  // console.log(blogPost);

  // feting data from the form
  const fetchData = async (url) => {};

  // form submission
  const formHandler = (event, formId) => {
    event.preventDefault();
    const form = new FormData(formId);
    const writeData = {};
    for (let [key, value] of form) {
      writeData[key] = value;
    }

    // const values = Object.values(writeData);
    // // values.splice(2, 1);
    // if (values.some((val) => val === "")) {
    //   toast.error("Pl fill all the form !", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 2000,
    //   });
    //   return null;
    // }

    setFormDataSaved((prev) => writeData);
    console.log(writeData);
    arrangeDataFromSavingInDB();
  };

  // useEffects to store data in session
  // useEffect(() => {
  //   storeDataInSession("blogData", blogData);
  // }, []);

  return (
    <GlobalContext.Provider
      value={{
        auth,
        setAuth,
        getDataFromSession,
        removeDataFromSession,
        clearAllDataFromSession,
        storeDataInSession,
        blogData,
        formHandler,
        setFormDataSaved,
        formDataSaved,
        fetchData,
        blogPost,
        setBlogPost,
      }}
    >
      <>
        <ToastContainer></ToastContainer>
        {children}
      </>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
