import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBlog = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      });
      const data = res.data;
      console.log(data);
      navigate("/blogs");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" // Set minimum height to ensure the entire content is visible
      backgroundColor="#f4f4f4" // Set a light background color
      pt={10} // Add padding to the top to avoid overlapping with the navigation menu
    >
      <Box
        border={3}
        borderColor="#ccc"
        borderRadius={10}
        padding={3}
        width="50%"
        maxWidth="800px" // Limit the maximum width for better readability
        bgcolor="white" // Set a white background color
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)" // Add a subtle shadow
      >
        <Typography
          className={classes.font}
          fontWeight="bold"
          color="primary" // Use a primary color for the heading
          variant="h4" // Use a slightly smaller heading size
          textAlign="center"
          mb={3}
        >
          Post Your Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputLabel className={classes.font} sx={labelStyles}>
            Title
          </InputLabel>
          <TextField
            className={classes.font}
            name="title"
            onChange={handleChange}
            value={inputs.title}
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
            value={inputs.description}
            variant="outlined"
            multiline
            rows={10} // Increase the number of rows for description
            fullWidth
            mb={3}
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            Image URL
          </InputLabel>
          <TextField
            className={classes.font}
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            variant="outlined"
            fullWidth
            mb={3}
          />
          <Button
            sx={{ borderRadius: 4, mt: 2 }} // Add margin to the top of the button
            variant="contained"
            color="warning" // Use a primary color for the button
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddBlog;
