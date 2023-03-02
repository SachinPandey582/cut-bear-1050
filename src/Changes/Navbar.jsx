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
const NavbarNew = () => {
  const [ham, setHam] = useState(false);

  return (
    <div className="MainContainer">
      <div className="TopNavbar">
        <div className="leftTopNavbar">
          {ham ? (
            <div className="hamburger">
              <GiHamburgerMenu />{" "}
            </div>
          ) : (
            <div className="cross">
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
            <button className="inputofNavbar1">
              <BsSearch />
            </button>
          </div>

          <div className="text">
            Select your Pin Code | <BsFillCartFill /> Cart | <RxAvatar /> Login
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
