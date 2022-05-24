import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState, setState } from "react";
import axios from 'axios';


const theme = createTheme();

export default function SignInSide() {

     const [formInfo, setFormInfo]= useState ({
          id: '',
          username: '',
          password: '',
          })
     
     const handleChange = (event) => {
          setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
     };

     const handleSubmit = (event) => {
     event.preventDefault();

     axios({ 
          url: 'http://localhost:8080/user/login/',
          method: 'POST',
          data: payload
          
          })
          .then( (response)=>{
               const message = response.data;
                 if (message === "Access granted"){
                   window.sessionStorage.setItem('isLoggedIn', true)
                   window.location.href = 'http://localhost:3000/profile/'
                 } else if(message === "wrong password!") {
                   alert(message)
                 }
             })
             .catch((error)=>{
               console.log('ERROR; Data has NOT been sent to the server!', error)
               alert('User not found')
     
             } )
     };

     const payload={
          username: formInfo.username,
          password: formInfo.password
        }

  return (
     <>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                label="User Name"
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
                  <Link href="#" variant="body2" onClick={alert='Needs Back-end'}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider> 
    </>
  );
}