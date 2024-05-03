import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogGrid from "./BlogGrid";
import { Dialog, DialogContent, DialogTitle, Typography, Button } from "@mui/material";

const UserBlogs = () => {
  const [user, setUser] = useState();
  const [dialogOpen, setDialogOpen] = useState(false); // State for dialog visibility
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/blog/user/${userId}`);
        const data = res.data;
        setUser(data.user);
        if (data.user.blogs.length === 0) { // If the user has no blogs, open the dialog
          setDialogOpen(true);
        }
      } catch (error) {
        console.error("Error fetching user blogs:", error);
      }
    };

    sendRequest();
  }, [userId]);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      {user && <BlogGrid blogs={user.blogs} userId={userId} isUserBlog={true} />}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography variant="h6">You haven't created a blog yet!</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Please write a blog to see your blogs in this section.
          </Typography>
          <Button onClick={handleCloseDialog} variant="contained" color="primary">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserBlogs;
