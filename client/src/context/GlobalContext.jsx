import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dummyJsonData from "../constants";

// create contexts here...
export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  // based on this we can authenticate the user
  let [auth, setAuth] = useState(false);

  // store the blogs data which is accessed from DB
  let [allBlogsGetFromDB, setAllBlogsGetFromDB] = useState(dummyJsonData);

  /**
   * @param {if i comment the useEfect hook then it will fetch local data present }
   */

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/blogs/json")
      .then((res) => res.json())
      .then((result) => {
        setAllBlogsGetFromDB(result);
      })
      .catch((err) => console.error(err));
  }, []);

  let [formDataSaved, setFormDataSaved] = useState({});
  console.log(allBlogsGetFromDB);

  // sending Data into backend
  const sendFrontDataIntoDB = async (url, data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/api/v1/" + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      // Set data to empty object only after the fetch request is completed
      // setData({});
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.error("Error:", error.message);
    }
  };

  // testing
  // const arrangeDataFromSavingInDB = (
  //   title,
  //   tagline,
  //   keywords,
  //   coverImage,
  //   contents
  // ) => {
  //   let keywordCheck = [];
  //   if (!keywords?.includes(",")) {
  //     keywordCheck = [keywords];
  //   } else {
  //     // Split the string with a comma and trim each keyword
  //     keywordCheck = keywords?.split(",").map((word) => word.trim());
  //     // console.log(keywordCheck);
  //   }

  //   // Update the updatedData object with the new values
  //   setBlogPost((prevBlogPost) => ({
  //     // ...prevBlogPost,
  //     title: title,
  //     tagline: tagline,
  //     keyword: keywordCheck,
  //     coverImage: coverImage,
  //     contents: contents.map((content) => {
  //       const newContent = {};

  //       // Check if heading exists and is a non-empty string
  //       if (content.heading && typeof content.heading === "string") {
  //         newContent.heading = content.heading;
  //       } else {
  //         newContent.heading = ""; // Default value if heading is not present or not a string
  //       }

  //       // Check if paragraphs is an array with at least one element
  //       if (
  //         Array.isArray(content.paragraphs) &&
  //         content.paragraphs.length > 0
  //       ) {
  //         newContent.paragraphs = content.paragraphs;
  //       } else {
  //         newContent.paragraphs = []; // Default value if paragraphs is not an array or is empty
  //       }

  //       return newContent;
  //     }),
  //   }));

  //   // Optional: Log the updated blogPost state to see the changes
  //   console.log(blogPost);
  // };

  // form submission
  const formHandler = (event, formId, typeOfForm) => {
    event.preventDefault();
    const form = new FormData(formId);
    const writeData = {};
    for (let [key, value] of form) {
      writeData[key] = value;
    }

    // toost pop up
    // const values = Object.values(writeData);
    // // // values.splice(2, 1);
    // if (values.some((val) => val === "")) {
    //   toast.error("Pl fill all the form !", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 2000,
    //   });
    //   return null;
    // }

    setFormDataSaved(writeData);
    sendFrontDataIntoDB("/blogs/create", writeData);
    // console.log(writeData);

    // based on condition we can set the data
    if (typeOfForm === "writeBlogForm") {
      
    }
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
        allBlogsGetFromDB,
        formHandler,
        setFormDataSaved,
        formDataSaved,
        sendFrontDataIntoDB,
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
