import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useStyles } from "./utils";

const Blog = ({ title, description, imageURL, userName, id, isUserBlog }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:8000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };

  const maxDescriptionLength = 100;
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + "..."
      : description;

  return (
    <div>
      <Card
        sx={{
          width: "350px",
          minHeight: "430px",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <Link to={`/blogs/${id}`} style={{ textDecoration: "none" }}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.font}
                sx={{ bgcolor: "red" }}
                aria-label="recipe"
              >
                {userName ? userName.charAt(0) : ""}
              </Avatar>
            }
            title={title}
          />
          <CardMedia
            component="img"
            height="194"
            image={imageURL}
            alt="Paella dish"
            sx={{ borderRadius: 2 }} // Apply border-radius property to the image
          />

          <CardContent>
            <Typography
              className={classes.font}
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "none" }} // Remove underline
            >
              {truncatedDescription}
            </Typography>
          </CardContent>
        </Link>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Align items vertically
            padding: "10px",
          }}
        >
          {isUserBlog && (
            <Box>
              <IconButton onClick={handleEdit}>
                <ModeEditOutlineIcon color="warning" />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteForeverIcon color="error" />
              </IconButton>
            </Box>
          )}
          <Box sx={{ marginLeft: "auto" }}> {/* Place this Box at the end */}
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
              By {userName}
            </Typography>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default Blog;
