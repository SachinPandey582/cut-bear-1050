import './App.css';
import Carousel from './Components/Carousel';
import Carousel2 from './Components/Carousel2';
import Footer from './Components/Footer/Footer';
import DropDownNavbar from './Components/Navbar/DropDownNavbar';
import Navbar from './Components/Navbar/Navbar';

import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
<h1>

<Navbar/>
<DropDownNavbar/>
<Carousel/>
<Carousel2/>
<AllRoutes/>
<Footer/>


</h1>
    </div>
  );
}

export default App;
