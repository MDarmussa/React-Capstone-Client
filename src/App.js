import "./App.css";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import React, { useEffect } from "react";
import Nav from "./components/NavMain";
import localData from "./localData";
import SignInSide from "./components/Login";
import SignUp from "./components/Register";

function App() {
  const [user, setUser] = React.useState(localData);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);

  return (
    <BrowserRouter className="App" position="sticky">
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Nav />
              <Home />
            </Fragment>
          }
        />

        <Route
          path="/register"
          element={
            <Fragment>
              <Nav />
              <SignUp />
            </Fragment>
          }
        />

        <Route
          path="/login"
          element={
            <Fragment>
              <Nav />
              <SignInSide
                user={user}
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                setisLoggedIn={setisLoggedIn}
              />
            </Fragment>
          }
        />

        <Route
          path="/profile"
          element={
           isLoggedIn ? (
              <Fragment>
                <NavBar user={user} setUser={setUser} />
                <DashBoard user={user} setUser={setUser} />
              </Fragment>): (<Navigate to="/logIn/" />) 
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
