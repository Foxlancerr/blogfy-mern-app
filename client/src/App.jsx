import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, RegisterForm, BlogDetails, WriteBlog,SignInUserForm } from "./pages";
import { Navbar } from "./components";
import { GlobalContext } from "./context/GlobalContext.jsx";

const App = () => {
  const { allBlogsGetFromDB } = useContext(GlobalContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route index element={<Home />}></Route>
          <Route path="/signin" element={<SignInUserForm></SignInUserForm>}></Route>
          <Route path="/signup" element={<RegisterForm></RegisterForm>}></Route>
          <Route path="/write" element={<WriteBlog />}></Route>
          <Route path="/blog" element={<Home></Home>}></Route>
          <Route
            path="/blog/:id"
            element={<BlogDetails allBlogsGetFromDB={allBlogsGetFromDB} />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
