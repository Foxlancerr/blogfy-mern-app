import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, UserAuthForm,BlogDetails } from "./pages";
import { Navbar } from "./components";
import blogData  from "./constants";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route index element={<Home />}></Route>
          <Route
            path="/login"
            element={<UserAuthForm pageUrl="login"></UserAuthForm>}
          ></Route>
          <Route path="/blog/:id" element={<BlogDetails blogData = {blogData}/>}></Route>
          <Route
            path="/signup"
            element={<UserAuthForm pageUrl="signup"></UserAuthForm>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
