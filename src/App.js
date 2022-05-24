import { Expense } from "./components/Expense";
import "./App.css";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Home from "./pages/Home";
import React, { useState, setState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';

// const userURL = 'http://localhost:8080/user/Register';



function App() {

  const [user, setUser] = React.useState(null);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);

  const handleLogin = () =>{
    setUser({
      isLoggedIn: false,
      // userId: data.user.id
      
    });
    // window.sessionStorage.setItem('userId', data.user.id)
  }
    

  const handleLogout = () => setUser(null);

  useEffect(() => {     
   console.log(window.sessionStorage.isLoggedIn);
   setisLoggedIn(window.sessionStorage.isLoggedIn);
  }, [])

  return (
      <BrowserRouter>
        <Routes>

          <Route path="/"
            element = {
              <Fragment>
                <NavBar />
                <Home />
              </Fragment>
            }
          />

        <Route path="/register" element={<Register />} />
        
        <Route path="/logIn" element={<LogIn />}/>
        {/* {!isLoggedIn ? <Navigate to="/logIn/"/> : null}  */}


        <Route path="/profile" //protected
          element={
            window.sessionStorage.isLoggedIn === "false" ? <Navigate to="/logIn/"/> : 
            <Fragment>
              <NavBar />
              <DashBoard />
            </Fragment>
          }/>





          {/* <Route path="/" element={<Home />} /> */}

        {/* <SignUp /> */}
          {/* <DashBoard /> 
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
