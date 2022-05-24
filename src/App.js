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
import Nav from './components/NavMain'
import { AppBar } from "@mui/material";

import SignInSide from "./components/LoginSnippet";
import SignUp from "./components/RegisterSnippet";
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
      <BrowserRouter className='App' position= 'sticky'>
        <Routes>

          <Route path="/"
            element = {
              <Fragment>
                <Nav />
                <Home />
              </Fragment>
            }
          />

        <Route path="/register"
          element={
          <Fragment>
            <Nav />
            {/* <Register /> */}
            <SignUp />
          </Fragment>
          
          } />
        
        <Route path="/login"
         element = {
          <Fragment>
            <Nav />
            <SignInSide />
            {/* <LogIn /> */}
          </Fragment>

         }
         />

        <Route path="/profile" //protected
          element={
            window.sessionStorage.isLoggedIn === "false" ? <Navigate to="/logIn/"/> : 
            <Fragment>
              <NavBar />
              <DashBoard />
            </Fragment>
          }/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
