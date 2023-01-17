import React, { useState } from 'react'
import NCss from "./Navbar.module.css"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={NCss.Container}>
        <div className={NCss.first}>
        Find a store | Buying guides | Contact us
        </div>
        <div className={NCss.second}>
            <div className={NCss.Sidebar}>
<div className={NCss.fir}>
<div>
<PlacementExample/>

</div>
<div>
<img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="reliance" />
</div>
</div>
<div className={NCss.sec}>
    <div>plus</div>
    <div>Cart</div>
</div>


            </div>
           <div className={NCss.RelianceImage}>
            <img style={{width:"80%" ,marginLeft:"15%"}} src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="reliance" />
           </div>
           <div className={NCss.Input}>
            <input placeholder='Search Your Product here '  style={{width:"100%" ,padding:"7px" ,borderRadius:"20px"}} type="text" /> 
           </div>
           <div className={NCss.first}>
           Deliver to Nainital 263139 | Cart | <Link to={"/signup"}>Login</Link>
           </div>
        </div>
    </div>
  )
}

export default Navbar
function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement] = useState('left')
  
    return (
      <>
       
        <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }