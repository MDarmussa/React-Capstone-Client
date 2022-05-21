import { Expense } from './components/Expense';
import './App.css';
import DashBoard from './components/DashBoard';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import SignInSide from './pages/SignIn';
import SignIn from './pages/SignIn';


function App() {
  // const {_id}=data; //extracts users from the users table 
  return (
    <div className="App">
      <NavBar />
      <SignIn />
      <SignUp />
      <SideBar />
      <DashBoard > 

      </DashBoard>
{/* <BrowserRouter>
<Route path='/login' element={<SignInSide />} />
        <Route path='/signup' element={<SignUp />} />
</BrowserRouter>
      */}

    </div>
  );
}

export default App;
