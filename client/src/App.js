import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React, { useState,useEffect } from 'react';
import Header from './components/Header';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogEdit from './components/BlogEdit';
import AddBlog from './components/AddBlog';
import Premium from './components/Premium';
import SingleBlog from './components/SingleBlog';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => {
    // console.log(isDarkMode);
    setIsDarkMode((prev)=>!prev);
    
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
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
    </ThemeProvider>
  );
}

export default App;
