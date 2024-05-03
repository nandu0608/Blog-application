import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogEdit from "./components/BlogEdit";
import AddBlog from "./components/AddBlog";
import Premium from "./components/Premium";
import SingleBlog from "./components/SingleBlog";
import Profile from "./components/Profile";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogEdit />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/blogs/:id" element={<SingleBlog />} />
              <Route path="/user/:id" element={<Profile />} />
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
