import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  DecreaseQuantity,
  DeleteTheItem,
  IncreaseQuantity,
} from "../Redux/Cart/Cart.Action";

const CartCard = (props) => {
  const { imgOFProd, Price, NameOFProd, Quant, Price1, id } = props;
  const dispatch = useDispatch();
  const handleIncreaseData = (id) => {
    console.log(id, "sachinda    ");
    dispatch(IncreaseQuantity(id));
  };
  const handledecreasedata = (id) => {
    console.log(id, "sachinda    ");
    dispatch(DecreaseQuantity(id));
  };
  const handleDelete = () => {
    dispatch(DeleteTheItem(id));
  };

  useEffect(() => {}, [dispatch]);
  return (
    <Stack  direction={['column', 'row']}  spacing={"2"}  gap={5}>
      <Box>
        <Image width={"100%"} src={imgOFProd} alt="imageofProducts" />
      </Box>

      <Box >
        <Stack  gap={5}>
        <Heading color={"black"} fontWeight="bold">
          {NameOFProd}
        </Heading>

        <Center>
          <Stack gap={5} color="black">
            <Box>Price {Price}</Box>
            <Box>Total units</Box>
            <HStack gap={3}>
              <Button
                p={10}
                border={"none"}
                onClick={() => handledecreasedata(id)}
              >
                -
              </Button>
              <Button border={"none"} p={10}>
                {Quant}
              </Button>
              <Button
                border={"none"}
                p={10}
                onClick={() => handleIncreaseData(id)}
              >
                +
              </Button>
            </HStack>
            Total Price= {Quant * Price1}
            <Button
              p={14}
              bg={"red"}
              color="white"
              onClick={() => handleDelete(id)}
            >
              Delete the Item
            </Button>
          </Stack>
        </Center>
      </Stack>
      </Box>
     
      
    </Stack>
  );
};

export default CartCard;
