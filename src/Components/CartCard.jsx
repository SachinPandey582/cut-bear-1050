import { Box, Button, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DecreaseQuantity, DeleteTheItem, IncreaseQuantity } from "../Redux/Cart/Cart.Action";

const CartCard = (props) => {
  const { imgOFProd,Price, NameOFProd,Quant,Price1 ,id} = props;
  const dispatch =useDispatch()
  const handleIncreaseData=(id)=>{
    console.log(id,"sachinda    ")
dispatch(IncreaseQuantity(id))
  }
  const handledecreasedata=(id)=>{
    console.log(id,"sachinda    ")
dispatch(DecreaseQuantity(id))
  }
  const handleDelete=()=>{
    dispatch(DeleteTheItem(id))
  }

  useEffect(()=>{

  },[dispatch])
  return (
    <HStack border={"1px solid"} gap={5}   
    >






      <Box>
        <img src={imgOFProd} alt="imageofProducts" />
      </Box>




      <Stack gap={17}>
        <Heading color={"black"} fontWeight="bold">{NameOFProd}</Heading>
      
     <Center >
     <HStack gap={45}  color="black" >
      <Box>Price {Price}</Box>
        <Box >Total units</Box>

       <HStack gap={3} >
        <Button p={10} border={"none"} onClick={()=>handledecreasedata(id)}>-</Button>
        <Button border={"none"} p={10}>{Quant}</Button>
      <Button border={"none"} p={10} onClick={()=>handleIncreaseData(id)}>+</Button>
       </HStack>
       Total Price= {Quant * Price1}
       <Button p={14} bg={"red"} color="white" onClick={()=>handleDelete(id)}>Delete the Item</Button>
      </HStack>
     </Center>
       
      </Stack>






    </HStack>
  );
};

export default CartCard;
