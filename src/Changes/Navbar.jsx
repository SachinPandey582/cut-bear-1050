import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { BsFillCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import "../Styles/Navbar.css";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const NavbarNew = () => {
  const [ham, setHam] = useState(false);
  const store1 = useSelector((state) => state.Login);
  console.log(store1);
  const navigate=useNavigate()
  let member = store1.value.userName;
  const store = useSelector((state) => state.Cart);
  return (
    <div className="MainContainer">
      <div className="TopNavbar">
        <div className="leftTopNavbar">
          { !ham ? (
            <div onClick={()=>setHam(!ham)} className="hamburger">
              <GiHamburgerMenu />{" "}
            </div>
          ) : (
            <div style={{fontWeight:"bolder"}} onClick={()=>setHam(!ham)} className="cross">
              <RxCross1 />{" "}
            </div>
          )}
        </div>

        <div className="TopNavbar1">
          Find a store | Buying guides | Contact us
        </div>
      </div>
      <div className="BottomNavbar">
        <div className="ThreeThings">
          <div className="image">
            <img
              style={{ width: "100%" }}
              src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
              alt="Simple Logo"
            />
          </div>

          <div className="inputofNavbar">
            <input
              className="inputofNavbar"
              type="text"
              placeholder="Search here..."
            />
            {/* <button className="inputofNavbar1">
              <BsSearch />
            </button> */}
          </div>

          <div className="text">
            <div className="text"> Select your Pin Code |</div>
            <div onClick={()=>navigate("/cart")} className="text"><BsFillCartFill /> Cart | </div>
            <div onClick={()=>navigate("/login")} className="text"> 
            {store1.value.userName!==undefined ? `${member}` :` Login`}
              </div>
         
          </div>

          <div className="text1">
            <div>
              <BsFillCartFill />
            </div>
            <div>
              <RxAvatar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
