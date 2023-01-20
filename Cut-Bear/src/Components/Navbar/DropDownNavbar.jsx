import React from 'react'
import NCss from "./Navbar.module.css"
import {  ChevronDownIcon } from '@chakra-ui/icons'


const DropDownNavbar = () => {
  return (
    <div>
        <div className={NCss.navbar}>
  
  <div className={NCss.dropdown}>
    <button className={NCss.dropbtn}>Mobiles & Wallets <ChevronDownIcon/></button>  
    <div className={NCss.dropdown_content}>
     <div className={NCss.firstDropDown}>
        hi there 
     </div>
    </div>
  </div> 
  <div className={NCss.dropdown}>
    <button className={NCss.dropbtn}>Telivision  <ChevronDownIcon/></button>  
    <div className={NCss.dropdown_content}>
      <a href="/allproducts">Link 1</a>
      <a href="/allproducts">Link 2</a>
      <a href="/allproducts">Link 3</a>
      <a href="/allproducts">Link 3</a>
      <a href="/allproducts">Link 3</a>
      <a href="/allproducts">Link 3</a>
    </div>
  </div>
  <div className={NCss.dropdown}>
    <button className={NCss.dropbtn}>Audio  <ChevronDownIcon/></button>  
    <div className={NCss.dropdown_content}>
      <a href="/allproducts">Link 1</a>
      <a href="/allproducts">Link 2</a>
      <a href="/allproducts">Link 3</a>
    </div>
  </div> <div className={NCss.dropdown}>
    <button className={NCss.dropbtn}>Home Apliance  <ChevronDownIcon/></button>  
    <div className={NCss.dropdown_content}>
      <a href="/allproducts">Link 1</a>
      <a href="/allproducts">Link 2</a>
      <a href="/allproducts">Link 3</a>
    </div>
  </div>    <div className={NCss.dropdown}>
    <button className={NCss.dropbtn}>Computer  <ChevronDownIcon/></button>  
    <div className={NCss.dropdown_content}>
      <a href="/allproducts">Link 1</a>
      <a href="/allproducts">Link 2</a>
      <a href="/allproducts">Link 3</a>
    </div>
  </div> <div className={NCss.dropdown}>
    <button className={NCss.dropbtn}>Kitchen Appliances  <ChevronDownIcon/></button>  
    <div className={NCss.dropdown_content}>
      <a href="/allproducts">Link 1</a>
      <a href="/allproducts">Link 2</a>
      <a href="/allproducts">Link 3</a>
    </div>
  </div> <div className={NCss.dropdown}>
    <button className={NCss.dropbtn}>Personal Care  <ChevronDownIcon/></button>  
    <div className={NCss.dropdown_content}>
      <a href="/allproducts">Link 1</a>
      <a href="/allproducts">Link 2</a>
      <a href="/allproducts">Link 3</a>
    </div>
  </div> <div className={NCss.dropdown}>
    <button className={NCss.dropbtn}>Accessories  <ChevronDownIcon/></button>  
    <div className={NCss.dropdown_content}>
      <a href="/allproducts">Link 1</a>
      <a href="/allproducts">Link 2</a>
      <a href="/allproducts">Link 3</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default DropDownNavbar