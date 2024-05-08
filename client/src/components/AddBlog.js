import { Box, Button, InputLabel, TextField, Typography, useTheme } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBlog = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme(); // Access the current theme

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
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
      minHeight="100vh"
      backgroundColor={theme.palette.mode === 'dark' ? "#333" : "#f4f4f4"}
      pt={10}
    >
      <Box
        border={3}
        borderColor={theme.palette.mode === 'dark' ? "#555" : "#ccc"}
        borderRadius={10}
        padding={3}
        width="50%"
        maxWidth="800px"
        bgcolor={theme.palette.mode === 'dark' ? "#444" : "white"}
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)"
      >
        <Typography
          className={classes.font}
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          mb={3}
          sx={{ color: theme.palette.mode === 'dark' ? "white" : "black" }}
        >
          Post Your Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputLabel sx={{ color: theme.palette.mode === 'dark' ? "white" : "black" }}>
            Title
          </InputLabel>
          <TextField
            name="title"
            onChange={handleChange}
            value={inputs.title}
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? "#555" : "white",
              ".MuiOutlinedInput-notchedOutline": { borderColor: theme.palette.mode === 'dark' ? "white" : "black" },
            }}
          />
          <InputLabel sx={{ color: theme.palette.mode === 'dark' ? "white" : "black", mt: 3 }}>
            Description
          </InputLabel>
          <TextField
            name="description"
            onChange={handleChange}
            value={inputs.description}
            variant="outlined"
            multiline
            rows={10}
            fullWidth
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? "#555" : "white",
              ".MuiOutlinedInput-notchedOutline": { borderColor: theme.palette.mode === 'dark' ? "white" : "black" },
            }}
          />
          <InputLabel sx={{ color: theme.palette.mode === 'dark' ? "white" : "black", mt: 3 }}>
            Image URL
          </InputLabel>
          <TextField
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? "#555" : "white",
              ".MuiOutlinedInput-notchedOutline": { borderColor: theme.palette.mode === 'dark' ? "white" : "black" },
            }}
          />
          <Button
            sx={{ borderRadius: 4, mt: 2 }}
            variant="contained"
            color="warning"
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
