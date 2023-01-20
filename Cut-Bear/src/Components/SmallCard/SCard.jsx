import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import SCss from "./SCard1.module.css";
const SCard1 = (props) => {
  const { image, NameOFProd, Price, ProdCut } = props;
  return (
    <Box className={SCss.card}>
      <Box className={SCss.img}>
        <Image w={250} src={image} alt="products" />
      </Box>
      <Text className={SCss.prodName} align={"left"}>
        {NameOFProd}
      </Text>
      <span className={SCss.prodPrice} align={"left"}>
        {Price}{" "}₹
      </span>
      <span className={SCss.prodCut}>{ProdCut}</span>
      <hr />
      <hr />

      <Box className={SCss.names}>
        <Box className={SCss.names}>Compare</Box>
        <Box className={SCss.names}>WishList</Box>
      </Box>
    </Box>
  );
};

export default SCard1;
