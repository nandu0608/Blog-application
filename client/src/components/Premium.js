import React from "react";
import { Typography, Container, Box, Button, ListItem, ListItemText, List, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SupportIcon from '@mui/icons-material/Support';
import { useTheme } from "@mui/material/styles"; // To adapt to light/dark mode

const Premium = () => {
  const theme = useTheme(); // Get the current theme

  return (
    <Container sx={{ bgcolor: theme.palette.background.default }}> {/* Background based on theme */}
      <Box my={4} pt={10}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: theme.palette.text.primary }} // Text color based on theme
        >
          Premium Membership
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.secondary }}>
          Upgrade to premium membership to unlock exclusive features and benefits!
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.secondary }}>
          Here are some benefits of premium membership:
        </Typography>
        <List>
          <ListItem
            sx={{
              backgroundColor: theme.palette.background.paper, // Adapt to light/dark mode
              borderRadius: "8px",
              mt: 2,
            }}
          >
            <ListItemIcon>
              <VerifiedUserIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                  Access to premium content
                </Typography>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: "8px",
              mt: 2,
            }}
          >
            <ListItemIcon>
              <MonetizationOnIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                  Ad-free experience
                </Typography>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: "8px",
              mt: 2,
            }}
          >
            <ListItemIcon>
              <SupportIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                  Priority customer support
                </Typography>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: "8px",
              mt: 2,
            }}
          >
            <ListItemIcon>
              <MonetizationOnIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                  Exclusive deals and discounts
                </Typography>
              }
            />
          </ListItem>
        </List>
        <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.secondary }}>
          To upgrade your account, please click the button below to proceed to payment.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          component={Link}
          to="/payment" // Replace with your payment route
          sx={{ mt: 2 }}
        >
          Upgrade Now
        </Button>
      </Box>
    </Container>
  );
};

export default Premium;
