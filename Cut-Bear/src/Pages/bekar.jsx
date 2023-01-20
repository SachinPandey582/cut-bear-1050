import React from 'react'
import BCss from "./Bekar.module.css"
const Bekar = () => {
  return (
    <div style={{backgroundColor:"#e71515"}}>
         <div className={BCss.stars}>
            <div className={BCss.custom_navbar}>
                <div className={BCss.brand_logo}>
                  <img style={{width:"80px"}} src="http://salehriaz.com/404Page/img/logo.svg" alt="hi" />
                    
                </div>
                {/* <div className={BCss.navbar_links}>
                    <ul>
                      <li><a href="/" target="_blank">Home</a></li>
                      <li><a href="/" target="_blank">About</a></li>
                      <li><a href="/" target="_blank">Features</a></li>
                      <li><a href="/" className="btn-request" target="_blank">Request A Demo</a></li>
                    </ul>
                </div> */}
            </div>
            <div className={BCss.central_body}>
                <img className={BCss.image-404} src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt='asd'/>
                <a href="/" className={BCss.btn_go_home} target="_blank">GO BACK HOME</a>
            </div>
            <div className="BCss.objects">
                <img className={BCss.object_rocket} src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt='asd'/>
                <div className={BCss.earth_moon}>
                    <img className={BCss.object_earth} src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt='asd'/>
                    <img className={BCss.object_moon} src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt='asd'/>
                </div>
                <div className={BCss.box_astronaut}>
                    <img className={BCss.object_astronaut} src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt='asd'/>
                </div>
            </div>
            <div className={BCss.glowing_stars}>
                <div className={BCss.star}></div>
                <div className={BCss.star}></div>
                <div className={BCss.star}></div>
                <div className={BCss.star}></div>
                <div className={BCss.star}></div>

            </div>

        </div>
    </div>
  )
}

export default Bekar