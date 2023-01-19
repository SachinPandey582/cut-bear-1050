// import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// // import { useSelector } from "react-redux";
// import { login } from "../../Redux/Login/Login.Action";

// const Login = () => {
//   const dispatch=useDispatch()
//   // const signupdatafromStore=useSelector((state)=>console.log(state))
//   const [loginData,setLoginData]=useState({
//     Email:"",
//     Password:""
//   })
//   // console.log(signupdatafromStore,"this is selector")
//   const handleChange = (e) => {
//     e.preventDefault()
//     let { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };
  
  
  
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//    dispatch(

//      login({
//        email:loginData.Email,
//        Password:loginData.Password
//       })
//       )
//       // console.log(loginData,"here is the login data ")
//     setLoginData({
//       Email:"",
//     Password:""
//     })
//   }
//   return (
//     <Box p={10} fontSize={{ base: '24px', md: '40px', lg: '56px' }} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"w={[300, 400, 500]} h="400px"maxW="960px" mx="auto">
       
//  <form onSubmit={handleSubmit}>
//      <VStack gap={9}>
//         <Heading marginLeft={-20} > Login /Registration</Heading>
//         <Input  onChange={handleChange} name="Email" value={loginData.Email}
//           placeholder="Enter Your Email ..."
//           type="text"
//           border="2px solid "
//         />
//            <Input onChange={handleChange} name="Password" value={loginData.Password}
//           placeholder="Enter Your Password ..."
//           type="text"
//           border="2px solid "
//         />

//         <Button type="submit" bg='red.500' w={"100%"}>
//           {" "}
//           LOGIN
//         </Button>
//       </VStack>
//  </form>
//     </Box>
//   );
// };

// export default Login;
