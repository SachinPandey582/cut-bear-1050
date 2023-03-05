
import AllRoutes from "./AllRouter/AllRoutes";
import "./App.css";
import BelowNavbar from "./Changes/BelowNavbar";
import Home from "./Pages/Home"
import NavbarNew from "./Changes/Navbar";
import FilterBySachin from "./Components/FilterBySachin";






function App() {

  
  
  return (
    <div className="App">  
    {/* <Navbar/>
    <DropDownNavbar/>   
     <AllRoutes/> */}
     <NavbarNew/>
     <BelowNavbar/>
    
     <AllRoutes/>

   
    </div>
  );
}

export default App;
