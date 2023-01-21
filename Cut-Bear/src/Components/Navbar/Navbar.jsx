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
  HStack,
  Text,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import {BiSearchAlt} from "react-icons/bi"
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
const Navbar = () => {
  const store1 = useSelector((state) => state.Login);
  console.log(store1);
  let member = store1.value.userName;
  const store = useSelector((state) => state.Cart);
  // console.log(store)
  return (
    <Box w={"100%"}bg="#e71515" >
      <Box bg="#e71515" p={5}>
        <HStack ml="75%" gap={10} bg="#e71515" color={"white"} width="320px">
          <Text>Find a store |</Text>
          <Text>Buying guides |</Text>
          <Text>Contact us</Text>
        </HStack>
      </Box>





      <HStack w={"95%"} margin="auto" bg="#e71515" display={"flex"} justifyContent="space-between">
        <Box w={"5%"}>
          <Image w={"100%"} h={"50px"} borderRadius={"50%"} src="/Yesh Company.jpg"/>
        </Box>



        <Box width={"40%"} bg="white"  borderRadius={"20px"} p={4} >
          <InputGroup w={"100%"}  borderRadius={"40px"}>
          <Input w={"90%"}  borderRadius={"20px"}  p={2}border="none"  placeholder="Search Your Components"/>
          <InputRightElement    children={
          <BiSearchAlt fontSize={30}/>
          }/>
          </InputGroup>
        </Box>
        <HStack  gap={10} bg="#e71515" color={"white"} >
          <Text>Select Your Pin Code |</Text>
          <Text>Cart |</Text>
          <Text>Login</Text>
        </HStack>
      </HStack>




    </Box>
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

{
  /* <div className={NCss.second}>
<div className={NCss.Sidebar}>
  <div className={NCss.fir}>
    <div>
      <PlacementExample />
    </div>
    <div>
      <img
        src="/Yesh Company.jpg"
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
  <h2 style={{fontWeight:"bold",fontSize:"30px"}}>YESH COMPANY</h2>
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
</div> */
}
