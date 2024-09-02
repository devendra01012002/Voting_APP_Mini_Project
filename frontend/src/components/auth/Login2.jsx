// import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const defaultTheme = createTheme();

export default function Login2() {
  let navigate = useNavigate();
  const [message, setmessage] = useState("");
  
  let AadharCardRef = useRef("");
  let passwordRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let aadharCardNumber = AadharCardRef.current.value;
      let password = passwordRef.current.value;
      let object = {
        aadharCardNumber: aadharCardNumber,
        password: password,
      };
      // console.log(object)
      const response = await axios.post(
        "http://localhost:8080/user/login",
        object
      );
      console.log(response.data);
      localStorage.setItem("User", response.data.candidate._id);
      localStorage.setItem("role", response.data.candidate.role);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("message", response.data.message);
      localStorage.setItem("name", response.data.candidate.name);

      window.location.href = "/";
    } catch (err) {
      console.log(err);
      setmessage(err.message);
      navigate("/user/login");
    }
  };

  const clickHandler = () => {
    localStorage.setItem("message", "");
  };

  function add() {
    setmessage(localStorage.getItem("message"));
  }

  useEffect(() => {
    add();
  }, []);

  return (
    <>
      <div className=" mt-1 mx-auto">
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
   <div className='login2-main-div ' style={{padding:"30px"}}>
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
              Sign in
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
                id="aadharCardNumber"
                label="Enter Adhar Number"
                name="aadharCardNumber"
                inputRef={AadharCardRef}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                inputRef={passwordRef}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <NavLink to = "/user/password" variant="body2">
                    Forgot password?
                  </NavLink>
                </Grid>
                <Grid item>
                  <Link href="/user/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      </div>
    </>
  );
}
