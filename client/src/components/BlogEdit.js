import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const BlogEdit = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({});
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/blog/${id}`);
        const data = res.data;
        setInputs({
          title: data.blog.title,
          description: data.blog.description,
          imageURL: data.blog.image,
        });
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8000/api/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
      });
      const data = res.data;
      console.log(data);
      navigate("/myBlogs");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      backgroundColor="#f4f4f4"
      pt={10}
    >
      <Box
        border={3}
        borderColor="#ccc"
        borderRadius={10}
        padding={3}
        width="50%"
        maxWidth="800px"
        bgcolor="white"
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)"
      >
        <Typography
          className={classes.font}
          fontWeight="bold"
          color="primary"
          variant="h4"
          textAlign="center"
          mb={3}
        >
          Edit Your Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputLabel className={classes.font} sx={labelStyles}>
            Title
          </InputLabel>
          <TextField
            className={classes.font}
            name="title"
            onChange={handleChange}
            value={inputs.title || ""}
            variant="outlined"
            fullWidth
            mb={3}
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            Description
          </InputLabel>
          <TextField
            className={classes.font}
            name="description"
            onChange={handleChange}
            value={inputs.description || ""}
            variant="outlined"
            multiline
            rows={10}
            fullWidth
            mb={3}
          />
          <Button
            sx={{ borderRadius: 4, mt: 2 }}
            variant="contained"
            color="warning"
            type="submit"
            fullWidth
          >
            Update
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default BlogEdit;
