
import AllRoutes from "./AllRouter/AllRoutes";
import "./App.css";
import BelowNavbar from "./Changes/BelowNavbar";
import NavbarNew from "./Changes/Navbar";
import DropDownNavbar from "./Components/Navbar/DropDownNavbar";
import Navbar from "./Components/Navbar/Navbar";




function App() {

  
  
  return (
    <div className="App">  
    {/* <Navbar/>
    <DropDownNavbar/>   
     <AllRoutes/> */}
     <NavbarNew/>
     <BelowNavbar/>
    </div>
  );
}

export default App;
