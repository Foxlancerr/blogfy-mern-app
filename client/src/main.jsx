import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalContextProvider>
);
