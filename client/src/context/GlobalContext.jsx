import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dummyJsonData from "../constants";
import {
  getDataFromSession,
  storeDataInSession,
} from "../utils/sessionStorage";

// create contexts here...
export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  // based on this we can authenticate the user
  let [userAuth, setUserAuth] = useState(false);
  console.log("Global Auth", userAuth);

  // store the blogs data which is accessed from DB
  let [allBlogsGetFromDB, setAllBlogsGetFromDB] = useState(dummyJsonData);

  

  useEffect(() => {
    let accessTokenInSession = getDataFromSession("access_token");
   if(accessTokenInSession){
    setUserAuth(true)
   }else{
    setUserAuth(false)
   }
  }, []);


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
  // console.log(allBlogsGetFromDB);

  // sending Data into backend
  const sendFrontDataIntoDB = async (url, data) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1" + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      toast.success(result.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });

      return result;
    } catch (err) {
      toast.error(err.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  // form submission
  const formHandler = async (event, formId, typeOfForm) => {
    event.preventDefault();
    const form = new FormData(formId);
    const formData = {};
    for (let [key, value] of form) {
      formData[key] = value;
    }

    setFormDataSaved(formData);

    // based on condition we can set the data
    switch (typeOfForm) {
      case "sign-up":
        sendFrontDataIntoDB("/users/signup", formData);
        break;
      case "sign-in":
        const res = await sendFrontDataIntoDB("/users/signin", formData);
        console.log(res.token);

        if (res.token == null && res.token == undefined) {
          return;
        } else {
          storeDataInSession("access_Token", res.token);
          setUserAuth(true);
        }

        break;
      case "create-blog-Form":
        sendFrontDataIntoDB("/blogs/create", formData);
        break;

      default:
        break;
    }
  };

  // useEffects to store data in session
  // useEffect(() => {
  //   storeDataInSession("blogData", blogData);
  // }, []);

  return (
    <GlobalContext.Provider
      value={{
        userAuth,
        setUserAuth,
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
