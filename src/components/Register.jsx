import * as React from 'react';
import { useState, setState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function SignUp() {
     const [formInfo, setFormInfo]= useState ({
          username: '',
          email: '',
          password: '',
        })

     const handleChange = (event) => {
          setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
     };

     const payload={
          username: formInfo.username,
          email: formInfo.email,
          password: formInfo.password
     }  
     const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormInfo({ username: "", email: "", password: "" });
    axios({
      url: `${process.env.REACT_APP_SERVER_URL}/user/register`, //taken from server.js line 33
      method: 'POST',
      data: payload
     })
     .then( ()=>{
          console.log('Data has been sent to the server!')
          navigate("/login/");
     })
     .catch(()=>{
          console.log('ERROR; Data has NOT been sent to the server!')
     } )
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formInfo.username} 
                    onChange={handleChange}
                    id="username"
                    label="User Name"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formInfo.email}
                    onChange={handleChange}
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formInfo.password}
                    onChange={handleChange}
                    required
                    fullWidth
                    label="Password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
               //  href='/login'
               className="signupButton"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}