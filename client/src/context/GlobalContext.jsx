import React, { createContext, useState } from "react";

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
      alert("pl fill all the values")
      return null;
    }

    setFormDataSaved(writeData);
    console.log(writeData);
  };
  console.log(formDataSaved);
  return (
    <GlobalContext.Provider
      value={{ formHandler, setFormDataSaved, formDataSaved, fetchData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
