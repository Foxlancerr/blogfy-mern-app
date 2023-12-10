import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, UserAuthForm, BlogDetails, WriteBlog } from "./pages";
import { Navbar } from "./components";
import blogData from "./constants";
import GlobalContextProvider from "./context/GlobalContext.jsx";

const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Navbar></Navbar>}>
            <Route index element={<Home />}></Route>
            <Route
              path="/login"
              element={<UserAuthForm pageUrl="login"></UserAuthForm>}
            ></Route>
            <Route path="/write" element={<WriteBlog />}></Route>
            <Route path="/blog" element={<Home></Home>}></Route>
            <Route
              path="/blog/:id"
              element={<BlogDetails blogData={blogData} />}
            ></Route>
            <Route
              path="/signup"
              element={<UserAuthForm pageUrl="signup"></UserAuthForm>}
            ></Route>
          </Route>
        </Routes>
      </GlobalContextProvider>
    </>
  );
};

export default App;
