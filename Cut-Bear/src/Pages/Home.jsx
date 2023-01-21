import { Box, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";

import { useSelector } from "react-redux";
// import ProductSimple from '../Components/CardForHome';
import { Carousel } from "../Components/Carousel";
import Carousel2 from "../Components/Carousel2";
import Footer from "../Components/Footer/Footer";
import RealExampleCarousel from "../Components/Slider";
import Slider2 from "../Components/Slider2";
import { store } from "../Redux/store";

const Home = () => {
  return (
    <>
      <Box display={{base:"none",md:"none" ,lg:"block"}}>
      <Carousel />
      <Carousel2 />
      </Box>
      <Box>
        <RealExampleCarousel />
      </Box>
      <Box>
        <Slider2 />
        <Slider2 />
        <Box>
          <RealExampleCarousel />
        </Box>
        <Box>
          <RealExampleCarousel />
        </Box>





        <HStack >
         
            <Box w={"20%"} overflow="hidden" >
              <Image h={"350px"} _hover={{transform:"scale(1.1)"}} transition={"transform 2s"}
                src="https://www.reliancedigital.in/medias/Neckband-True-Wireless-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaDEyLzk5NTA0NTA0MTc2OTQuanBnfDAxOWRiN2Q5NWE2YmRjY2RhYWUyZjkwOGU2M2NlYzA5MzFlMzI4YjJlOGQ4OTc5NTQ2M2VkYjlmMTU5NmMwNzM"
                alt="ajkshd"
              ></Image>
          </Box>
          <Box w={"79%"}>
            <RealExampleCarousel />
          </Box>
        </HStack>










      </Box>

      <Footer />
    </>
  );
};

export default Home;
