import { Expense } from "./components/Expense";
import "./App.css";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  // const {_id}=data; //extracts users from the users table
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />

        <Routes>

          {/* <LogIn />
          <Register />
          <SideBar />
          <DashBoard /> */}

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile"
            element={
              <Fragment>
                <SideBar />
                <DashBoard />
              </Fragment>
            }/>
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
<Route path='/login' element={<SignInSide />} />
        <Route path='/signup' element={<SignUp />} />
</BrowserRouter>
      */}
    </div>
  );
}

export default App;
