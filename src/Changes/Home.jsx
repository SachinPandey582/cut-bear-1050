import React from 'react'
import { Carousel } from '../Components/Carousel'
import Carousel2 from '../Components/Carousel2'
import Slider2 from '../Components/Slider2'
import RealExampleCarousel from "../Components/Slider";
import "../Styles/Home.css"
const Home = () => {
  return (
    <div className='HomeContainer'>
      <div className='HomeTopImage'>
        <img src="https://www.reliancedigital.in/medias/Happy-Holi-Carousel-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMTMxMzV8aW1hZ2UvanBlZ3xpbWFnZXMvaGFjL2g2ZS85OTY2MjA2MDI1NzU4LmpwZ3xjNGY1MGY2YTg2ZWYzNzcwZWQwMWJiNTYyNjFjNzE1MzAyYTFiMTFlMzc2YzIxZTI1NzVmODZiNDMxYjE4YjE3" alt="firstinmage" />
      </div>
      <div>crosels</div>
      <div className='HomeHeading'>
      <h4>Digital Mobile Days <button style={{backgroundColor:"blue",color:"white"}}>View All</button></h4>
      </div>
      <div>
      <RealExampleCarousel/>
     
        
        <Slider2/>
      </div>
    </div>
  )
}

export default Home
