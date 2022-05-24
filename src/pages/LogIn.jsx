
import React, { useState, setState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function LogIn() {
  const [formInfo, setFormInfo]= useState ({
    username: '',
    password: '',
  })
  const handleChange = (event) => {
    // responsible for updating state
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
    // this.setState({
    //   [name]: value, //taking the name declared in each target input
    // });
  };
  const handleSubmit = (event) => { //responsible for sending user input to the server
    //log the formInfo state to the browser
    event.preventDefault();//stops browser from refreshing 
    // console.log(formInfo);
    // navigate(`/FormSubmission`, {formInfo})
    setFormInfo({ username: "", email: "", password: "" });

    axios({  //this might not needed, we just need useaState to compare auth
      url: 'http://localhost:8080/user/login/', //taken from server.js line 33
      method: 'POST',
      data: payload
      
        })
        .then( (response)=>{
          const message = response.data;
          if (message === "Access granted"){ //we set the global state to isLogin to true, and we redirect to profile page (must match line 56 in user.route in backend in router.post("/login")
            window.sessionStorage.setItem('isLoggedIn', true)
            window.location.href = 'http://localhost:3000/profile/' //modify this when deploy, because this is a local href
          }
          console.log('Data has been sent to the server! Im A LOG IN ', message)
        })
        .catch(()=>{
          console.log('ERROR; Data has NOT been sent to the server!')
        } )
      
  };
const payload={
  username: formInfo.username,
  password: formInfo.password
}


  //make the post requst 


  console.log("State", formInfo);

  return (
    <div>
      <h2>Log In</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formInfo.username} //gets the latest value from whatever is entered by the user
            onChange={handleChange}
          />
        </div>
    
        <div className="form-input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formInfo.password}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
        {/* <button><Link to="/profile">Submit</Link></button> */}
      </form>
    </div>
  );
}




// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Nav from '../components/NavBar';
// // import StickyFooter from '../components/Footer';

// const theme = createTheme();

// export default function SignInSide() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//      <>
//      <Nav />
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 20,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               /> 
//               <Button
//                 href="/"
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2" onClick={alert='Needs Back-end'}>
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="/signUp" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               {/* <Copyright sx={{ mt: 5 }} /> */}
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider> <br /><br /><br /><br /><br />
//     {/* <StickyFooter /> */}
//     </>
//   );
// }