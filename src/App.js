import { Expense } from './components/Expense';
import './App.css';
import DashBoard from './components/DashBoard';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';




function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <DashBoard > 

      </DashBoard>
    </div>
  );
}

export default App;
