// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Avatar,
//   CircularProgress,
// } from "@mui/material";
// import { useSelector } from "react-redux"; // Assuming Redux for state management
// import axios from "axios";

// const Profile = () => {
//   const userId = useSelector((state) => state.userId); // Get the user ID from Redux or a similar state management system
//   const [user, setUser] = useState(null);
//   const [editMode, setEditMode] = useState(false); // To switch between viewing and editing modes
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`/api/user/${userId}`);
//         setUser(response.data.user);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };

//     fetchUser();
//   }, [userId]);

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleSave = async () => {
//     try {
//       await axios.put(`/api/user/${userId}`, user); // Assuming a PUT endpoint for user update
//       setEditMode(false);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   if (loading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container>
//       <Box textAlign="center" my={4}>
//         <Avatar sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}>
//           {user?.name?.charAt(0)}
//         </Avatar>
//         {editMode ? (
//           <form>
//             <TextField
//               label="Name"
//               name="name"
//               value={user.name || ""}
//               onChange={handleChange}
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               label="Email"
//               name="email"
//               value={user.email || ""}
//               onChange={handleChange}
//               fullWidth
//               sx={{ mb: 2 }}
//               disabled // Assuming email is not editable
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSave}
//               sx={{ borderRadius: 2 }}
//             >
//               Save
//             </Button>
//           </form>
//         ) : (
//           <>
//             <Typography variant="h5">{user.name}</Typography>
//             <Typography variant="body1" color="text.secondary">
//               {user.email}
//             </Typography>
//             <Button
//               variant="contained"
//               color="warning"
//               onClick={handleEdit}
//               sx={{ borderRadius: 2 }}
//             >
//               Edit Profile
//             </Button>
//           </>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Profile;
