import React from "react";
import Blog from "./Blog";

const BlogGrid = ({ blogs, userId, isUserBlog }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px",paddingTop: "100px" }}>
      {blogs.map((blog) => (
        <div key={blog._id}>
          
            <Blog
              id={blog._id}
              title={blog.title}
              description={blog.description}
              imageURL={blog.image}
              userName={blog.user.name}
              isUserBlog={isUserBlog}
            />
          
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
