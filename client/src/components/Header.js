import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
  Switch,
  TextField,
  IconButton,
  CssBaseline,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Header = ({ isDarkMode, toggleTheme }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState(0);
  const userId = localStorage.getItem("userId");

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: isDarkMode
            ? "linear-gradient(90deg, rgba(40, 40, 40, 1) 2%, rgba(60, 60, 60, 1) 100%)"
            : "linear-gradient(90deg, rgba(58, 75, 180, 1) 2%, rgba(116, 49, 110, 1) 36%, rgba(2, 0, 161, 1) 73%, rgba(69, 92, 252, 1) 100%)",
        }}
      >
        <Toolbar>
          <Typography
            className={classes.font}
            variant="h4"
            color={isDarkMode ? "white" : "inherit"}
          >
            BlogsApp
          </Typography>
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label="Home"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label="My Blogs"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="Add Blog"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/premium"
                label="Get Premium"
              />
            </Tabs>
          </Box>
          <Box marginLeft="auto" sx={{ marginRight: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Search"
              sx={{
                backgroundColor: isDarkMode
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
                borderRadius: 2,
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "white" : "black",
                },
              }}
              InputProps={{
                endAdornment: (
                  <IconButton color="warning">
                    <SearchIcon
                      sx={{
                        fontSize: 38,
                        color: isDarkMode ? "white" : "inherit",
                      }}
                    />
                  </IconButton>
                ),
              }}
            />
          </Box>
          <Box display="flex" marginLeft="auto">
            {isLoggedIn ? (
              <>
                <IconButton
                  LinkComponent={Link}
                  to={`/user/${userId}`}
                  sx={{ color: "inherit", ml: 2 }}
                >
                  <AccountCircle
                    sx={{
                      fontSize: 40,
                      color: isDarkMode ? "white" : "inherit",
                    }}
                  />
                </IconButton>
                <Button
                  onClick={() => dispatch(authActions.logout())}
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10 }}
                  color="warning"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10 }}
                  color="warning"
                >
                  Login
                </Button>
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10 }}
                  color="warning"
                >
                  Signup
                </Button>
              </>
            )}
          </Box>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            color="default"
            sx={{ ml: 2 }}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
