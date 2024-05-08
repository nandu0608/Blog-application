import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const BlogEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({});

  const theme = useTheme(); // Get the current theme
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
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
      pt={10}
      bgcolor={theme.palette.background.default} // Adapt to light or dark mode
    >
      <Box
        border={3}
        borderRadius={10}
        padding={3}
        width="50%"
        maxWidth="800px"
        bgcolor={theme.palette.background.paper} // Match light/dark mode
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)"
      >
        <Typography
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          mb={3}
          sx={{ color: theme.palette.text.primary }} // Text color based on the theme
        >
          Edit Your Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputLabel sx={{ ...labelStyles, color: theme.palette.text.primary }}>
            Title
          </InputLabel>
          <TextField
            name="title"
            onChange={handleChange}
            value={inputs.title || ""}
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
              ".MuiOutlinedInput-notchedOutline": { borderColor: theme.palette.divider },
            }}
          />
          <InputLabel sx={{ ...labelStyles, color: theme.palette.text.primary }}>
            Description
          </InputLabel>
          <TextField
            name="description"
            onChange={handleChange}
            value={inputs.description || ""}
            variant="outlined"
            multiline
            rows={10} // Good space for editing descriptions
            fullWidth
            sx={{
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
              ".MuiOutlinedInput-notchedOutline": { borderColor: theme.palette.divider },
            }}
          />
          <Button
            sx={{ borderRadius: 4, mt: 2 }}
            variant="contained"
            color="warning"
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
