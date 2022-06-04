import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState, setState } from "react";
import axios from "axios";
import { Container } from "@mui/system";
import "../pages/Home.css"
import { green } from "@mui/material/colors";


const theme = createTheme();

export default function Login(props) {
  const { setUser } = props;
  const [formInfo, setFormInfo] = useState({
    username: "",
    password: "",
  });

  const [signinError, setsigninError] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const payload = {
    username: formInfo.username,
    password: formInfo.password,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login/`, payload)
      // console.log(response)
        if (response.data.msg) {
          setsigninError(response.data.msg);
          // setisLoggedIn(false)
        } else {
          setUser(response.data);
          window.sessionStorage.setItem('isLoggedIn', true)
          window.sessionStorage.setItem('user', JSON.stringify(response.data))
          navigate("/profile/");
        }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 20,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#FBCD8A" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formInfo.username}
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formInfo.password}
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {/* message for login condition */}
                
                <Typography color= "red"> 
                  {!!signinError ? signinError : ""}
                </Typography>
                <Button
                className="signInButton"
                  color="primary"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2}} 
                >
                  Sign In
                </Button>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
