import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginSuccess } from "../../Redux/Login/Login.Actions";

const Login = () => {
  const store1=useSelector((state)=>state.Login)
  console.log(store1,"store1")
  const dispatch=useDispatch()
  const [loginData,setLoginData]=useState({
    email:"",
    password:""
  })
  // console.log(signupdatafromStore,"this is selector")
  const handleChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  let store3=useSelector((state)=>state.signin)
  console.log(store3,"store3")
  const navigate =useNavigate()
 const loginTheData=(data)=>{
if(data.email==="sachinpandey582@gmail.com" && data.password==="tussiadminho"){
  alert("Welcome Admin")
  navigate("/bekar")
}
   if(store3.data1.email===data.email && store3.data1.password ===data.password){
     alert("hi marjawa ")
     dispatch(LoginSuccess(data))
navigate("/")
    }else{
      alert("mar hi ja ");
    }
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
   loginTheData({
       email:loginData.email,
       password:loginData.password,
       userName:store3.data1.FirstName
      })
      













         // console.log(loginData,"here is the login data ")
    setLoginData({
      Email:"",
    Password:""
    })
  }
  return (
    <Box p={10} fontSize={{ base: '24px', md: '40px', lg: '56px' }} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"w={[300, 400, 500]} h="400px"maxW="960px" mx="auto">
       
 <form onSubmit={handleSubmit}>
     <VStack gap={9}>
        <Heading marginLeft={-20} > Login /Registration</Heading>
        <Input  onChange={handleChange} name="email" value={loginData.email}
          placeholder="Enter Your Email ..."
          type="text"
          border="2px solid "
        />
           <Input onChange={handleChange} name="password" value={loginData.password}
          placeholder="Enter Your Password ..."
          type="text"
          border="2px solid "
        />

        <Button  type="Submit" bg='red.500' w={"100%"}>
          {" "}
          LOGIN
        </Button>
      </VStack>
 </form>
    </Box>
  );
};

export default Login;
