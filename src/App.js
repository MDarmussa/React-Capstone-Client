import "./App.css";
import DashBoard from "./components/DashBoard";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import React, { useEffect } from "react";
import Nav from "./components/NavMain";
import NavDash from "./components/NavDash"
import localData from "./localData";
import localExpense from "./localExpense";
import Login from "./components/Login";
import SignUp from "./components/Register";

function App() {
  const [user, setUser] = React.useState(localData);
  const [expense, setExpense] = React.useState(localExpense);
  const [triggerReload, setTriggerReload] = React.useState(false);

  return (
    <BrowserRouter className="App" position="sticky">
      <div>
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
                <Login
                  setUser={setUser}
                />
              </Fragment>
            }
          />

          <Route
            path="/profile"
            element={
              window.sessionStorage.isLoggedIn === 'true' ? (
                <Fragment>
                  <NavDash />
                  <DashBoard user={JSON.parse(window.sessionStorage.user)} expense={expense} setExpense={setExpense} triggerReload={triggerReload} setTriggerReload={setTriggerReload} />
                </Fragment>) : (<Navigate to="/logIn/" />) 
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
