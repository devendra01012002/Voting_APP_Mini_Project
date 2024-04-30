import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import {  useRef, useState } from 'react';
import axios from 'axios';
// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function EditPassword() {
  let navigate = useNavigate();
  const [message, setmessage] = useState("");
  let CurrentPasswordRef = useRef("");
  let NewPasswordRef = useRef("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(object)
            let currentpassword = CurrentPasswordRef.current.value;
            let newpassword = NewPasswordRef.current.value;
            let object = {
              currentPassword: currentpassword,
              newPassword: newpassword,
            };
            const response = await axios.put(
              "http://localhost:8080/user/profile/password",
              object,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            console.log(response.data);
         localStorage.setItem("message","password edit successfully");
          navigate("/user/profile");
        }
        catch (err) {
          console.log(err);
          setmessage(err.message);
          navigate('/user/password')
        }
  };

   const clickHandler = () => {
     localStorage.setItem("message", "");
   };

  return (
    <>
      <div className=" mt-3 mx-auto">
        {message && message.length ? (
          <div className=" alert alert-warning alert-dismissible fade show">
            <strong>{message}!</strong>
            <button
              type="button"
              onClick={clickHandler}
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="login2-main-div">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Change Password
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Current Password"
                  type="password"
                  id="currentpassword"
                  inputRef={CurrentPasswordRef}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="newpassword"
                  inputRef={NewPasswordRef}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Change Password
                </Button>
                <NavLink to="/user/login" variant="body2">
                  {"Already have an account? Sign in"}
                </NavLink>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}
