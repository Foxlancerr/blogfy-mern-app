import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  console.log(children);
  let [counter, setCounter] = useState("hello");
  let [formDataSaved, setFormDataSaved] = useState({});

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

    const values = Object.values(writeData);
    // values.splice(2, 1);
    if (values.some((val) => val === "")) {
      toast.error("Pl fill all the form !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return null;
    }

    setFormDataSaved(writeData);
    console.log(writeData);
  };

  return (
    <GlobalContext.Provider
      value={{ formHandler, setFormDataSaved, formDataSaved, fetchData }}
    >
      <>
        <ToastContainer></ToastContainer>
        {children}
      </>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
