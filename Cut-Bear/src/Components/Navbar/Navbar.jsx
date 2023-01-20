import React, { useState } from "react";
import NCss from "./Navbar.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
const Navbar = () => {
  const store1=useSelector((state)=>state.Login)
  console.log(store1);
  let member=store1.value.userName
    const store =useSelector((state)=>state.Cart)
    // console.log(store)
  return (
    <div className={NCss.Container}>
      <div className={NCss.first1}>
        Find a store | Buying guides | Contact us
      </div>
      <div className={NCss.second}>
        <div className={NCss.Sidebar}>
          <div className={NCss.fir}>
            <div>
              <PlacementExample />
            </div>
            <div>
              <img
                src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
                alt="reliance"
              />
            </div>
          </div>
          <div className={NCss.sec}>
            <div>plus</div>
            <div className={NCss.dropdown}>
              <button className={NCss.dropbtn}>
                Telivision <ChevronDownIcon />
              </button>
              <div className={NCss.dropdown_content}>
                <a href="/allproducts">Link 1</a>
                <a href="/allproducts">Link 2</a>
                <a href="/allproducts">Link 3</a>
                <a href="/allproducts">Link 3</a>
                <a href="/allproducts">Link 3</a>
                <a href="/allproducts">Link 3</a>
              </div>
            </div>
          </div>
        </div>
        <div className={NCss.RelianceImage}>
          <img
            style={{ width: "80%", marginLeft: "15%" }}
            src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
            alt="reliance"
          />
        </div>
        <div className={NCss.Input}>
          <input
            placeholder="Search Your Product here "
            style={{ width: "100%", padding: "7px", borderRadius: "20px" }}
            type="text"
          />
        </div>
        <div className={NCss.first}>
          <div>Deliver to Nainital 263139</div>{" "}
          <div className={NCss.dropdown}>
            <button className={NCss.dropbtn}>
              Cart <ChevronDownIcon />
            </button>
            <div className={NCss.dropdown_content}>
             <div className={NCss.firstDropDown1}>
             {
                store.data.map((el)=>(
                
                  <div className={NCss.cartslider}>
                    <div>
                 <img style={{width:"100%"}} className={NCss.zoomingEffect} src={el.imgOFProd} alt="" />
                </div>
                
                <div>
                     <Link to="/cart" key={el.id}>{el.NameOFProd}</Link>
                   </div>

                </div>
                
                 
                )
                )
            }
             </div>
            </div>
          </div>{" "}
          <div>
            <Link to={"/signup"}>
{store1.value.userName!==undefined ? `${member}` :"Login"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("left");

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
