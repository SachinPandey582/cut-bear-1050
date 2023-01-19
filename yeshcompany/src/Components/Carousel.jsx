import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export  function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://www.reliancedigital.in/medias/intranet-Carousal-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMDI1MTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hlMC85OTQxNTE2MTU2OTU4LmpwZ3wxMDJmNjQ2YzdjYTIyMzk2NTM5NTMyYjZhNTgyN2M2MjlhMTM3Y2FmNWNhZjAwNzUxY2ExMjg0ZmNhNGMxZjRl',
    'https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-D.jpg?context=bWFzdGVyfGltYWdlc3w5OTU3OXxpbWFnZS9qcGVnfGltYWdlcy9oZjUvaGRiLzk5MjgzODAyMTk0MjIuanBnfDU0Y2FhNjUwZjVhZWNmZWI0NGNmNDY3NzAzNDE3ZDkxOWIxMzQzMWZmZDVjZGMzM2Q2YzBiOThhYzBkMTg1MjQ',
   
  ];

  return (
    <Box
      position={'relative'}
      height={'300px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        position="absolute"
        left={side}
        opacity={0.7}
        bg="white"
        color="black"
        paddingTop={10}
        paddingBottom={10}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        position="absolute"
        right={side}
        opacity={0.7}
        bg="white"
        color="black"
        paddingTop={10}
        paddingBottom={10}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={300}
            
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}