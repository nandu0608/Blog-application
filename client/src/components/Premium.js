import React from "react";
import { Typography, Container, Box, Button, ListItem, ListItemText, List, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SupportIcon from '@mui/icons-material/Support';

const Premium = () => {
  return (
    <Container>
      <Box my={4} pt={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          Premium Membership
        </Typography>
        <Typography variant="body1" gutterBottom>
          Upgrade to premium membership to unlock exclusive features and benefits!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here are some benefits of premium membership:
        </Typography>
        <List>
          <ListItem sx={{ backgroundColor: '#f7f7f7', borderRadius: '8px', mt: 2 }}>
            <ListItemIcon>
              <VerifiedUserIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h6">Access to premium content</Typography>} />
          </ListItem>
          <ListItem sx={{ backgroundColor: '#f7f7f7', borderRadius: '8px', mt: 2 }}>
            <ListItemIcon>
              <MonetizationOnIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h6">Ad-free experience</Typography>} />
          </ListItem>
          <ListItem sx={{ backgroundColor: '#f7f7f7', borderRadius: '8px', mt: 2 }}>
            <ListItemIcon>
              <SupportIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h6">Priority customer support</Typography>} />
          </ListItem>
          {/* Add more benefits as needed */}
          <ListItem sx={{ backgroundColor: '#f7f7f7', borderRadius: '8px', mt: 2 }}>
            <ListItemIcon>
              <MonetizationOnIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h6">Exclusive deals and discounts</Typography>} />
          </ListItem>
        </List>
        <Typography variant="body1" gutterBottom>
          To upgrade your account, please click the button below to proceed to payment.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          component={Link}
          to="/payment" // Replace "/payment" with your actual payment page route
          sx={{ mt: 2 }}
        >
          Upgrade Now
        </Button>
      </Box>
    </Container>
  );
};

export default Premium;
