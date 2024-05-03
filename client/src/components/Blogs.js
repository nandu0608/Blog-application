import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogGrid from "./BlogGrid";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/blog");
        const data = res.data;
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <BlogGrid blogs={blogs} userId={userId} />
    </div>
  );
};

export default Blogs;
