
import AllRoutes from "./AllRouter/AllRoutes";
import "./App.css";
import DropDownNavbar from "./Components/Navbar/DropDownNavbar";
import Navbar from "./Components/Navbar/Navbar";




function App() {

  
  
  return (
    <div className="App">  
    <Navbar/>
    <DropDownNavbar/>   
     <AllRoutes/>
    </div>
  );
}

export default App;
