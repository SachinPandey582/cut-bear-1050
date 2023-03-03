import {
  Box,
  Button,
 
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SigninCompany } from "../../Redux/Signin/Signin.action";

const Signup = () => {
    const store1=useSelector((state)=>state.signin)
    console.log(store1)
  const [signupData, setSignupData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
  });


  const toast = useToast();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signupData,"this is the data i requuire ")
    let {FirstName,LastName,password,email}=signupData
    if (!FirstName || !email || !password || !LastName) {
      console.log("sachin is not Good");

      toast({
        title: "Sign Up Failed",
        description: "Fill all the Credentials",
        status: "error",
        duration: 900,
        isClosable: true,
        position: "top",
      });
    } else {
      console.log("sachin is Good");

      toast({
        title: "Account created",
      status: "success",
      duration: 1200,
      isClosable: true,
      position: "top",
    });
    dispatch(
        SigninCompany({
        email: signupData.email,
        password: signupData.password,
        FirstName:signupData.FirstName,
        LastName:signupData.LastName
      })
      );
      setSignupData({ FirstName: "", LastName: "", email: "", password: "" });
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    }
  };
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      w={"35%"}
      m="auto"
      p={5}
      h="600px"
    >
      <form onSubmit={handleSubmit}>
        <VStack gap={5}>
          <Text fontSize={"lg"} fontWeight="bolder">
            Register New Account
          </Text>
          <Input
            value={signupData.FirstName}
            onChange={handleChange}
            name="FirstName"
            placeholder="First Name "
            border={"1px solid grey"}
          ></Input>
          <Input
            value={signupData.LastName}
            onChange={handleChange}
            name="LastName"
            placeholder="Last Name"
            border={"1px solid grey"}
          ></Input>
          <Input
            value={signupData.email}
            onChange={handleChange}
            name="email"
            placeholder="Email Address"
            border={"1px solid grey"}
          ></Input>
          <Text fontSize="xs">
            Your email address will be used to send order invoice, order updates
            etc
          </Text>
          {/* <Button
            value={signupData.password}
            onChange={handleChange}
            name="password"
            border={"1px solid red"}
            color="red"
          >
            {" "}
            Verify Email
          </Button> */}
          <Input name="password"
          value={signupData.password}
          onChange={handleChange}
           placeholder="Enter Your Password" border={"1px solid grey"}></Input>
          <Text fontSize="xs">
            Your mobile number will be used to avail benefits such as Jio Mart
            Cashback and ROne Loyality Points and receive quick notifications.
          </Text>
          <Button type="Submit" bg="red.400" w={"100%"}>
            Proceed
          </Button>
          <Text>
            AlReady Registered ?
            <Text fontSize="lg" fontWeight={"bolder"}>
              Login
            </Text>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default Signup;
