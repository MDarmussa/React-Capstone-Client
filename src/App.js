import { Expense } from './components/Expense';
import './App.css';
import DashBoard from './components/DashBoard';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
// import { BrowserRouter, Routes, Route } from 

import LogIn from './pages/LogIn';
import Register from './pages/Register';


function App() {
  // const {_id}=data; //extracts users from the users table 
  return (
    <div className="App">
      <NavBar />
      <LogIn />
      <Register />
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
