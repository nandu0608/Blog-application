import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/blog/${id}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    
    fetchBlog();

    // Clean up function
    return () => {
      setBlog(null);
    };
  }, [id]);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px",paddingTop: "80px" }}>
      {blog && (
        <div>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{blog.title}</h2>
          <img src={blog.image} alt="" style={{ width: "100%", height: "auto", marginBottom: "20px" }} />
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "10px" }}>{blog.description}</p>
          <p style={{ fontSize: "14px", color: "#888", textAlign: "right" }}>By {blog.user.name}</p>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
