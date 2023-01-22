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

export default function Carousel2() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://www.reliancedigital.in/medias/Premium-Audio-Accessories-Carousel-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MTMxM3xpbWFnZS9qcGVnfGltYWdlcy9oYjEvaDY1Lzk5Mzc4OTQ3MDMxMzQuanBnfGI5YmRhOGRiM2RlMmMwN2IwZDExZjI1MjE1OTU4ZGVlMTUyZTZlYWUzZWE1Yzg5ZDY5ZjlhZjcxZmY5OWI5YWE',
    'https://www.reliancedigital.in/medias/iPhone-13-CLP-Banner-13-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2NDE5N3xpbWFnZS9qcGVnfGltYWdlcy9oNjgvaDg4Lzk5NDg3MDk1NTIxNTguanBnfGRmZmQ1MGUwMDEyZDc4ODk0OTJlYWVlNGE2NzIzZjQ5MjIxOWUzNGMzMWU4MTIwNGNkMDUyMmZiODI4OTNmMWE',
    "https://www.reliancedigital.in/medias/Televisions-Carousel-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5MTYwMXxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaGY3Lzk5Mzc4OTQ4MzQyMDYuanBnfGVhYjg1ZDkzZjUxOTkzNjhkNWFkYWVkNGYwYjMzNzk2ZTZkM2U5MjNkMWJmZmJjZjYxNzJkNTQ5NzFlNGZiNDk",
    "https://www.reliancedigital.in/medias/Carousel-Banner-Winter-Store-D.jpg?context=bWFzdGVyfGltYWdlc3wxNjM1NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDRjL2hiMS85OTMzMzQ5NjgzMjMwLmpwZ3wyM2ZkYjBmNWRkZmZlMmZlZTRiYWJmZmVlMDg4ZjBjZTE2YzM0ODdkNmM5NDRmNWExNjFjMTk3N2M4NTFjOWRh",
    "https://www.reliancedigital.in/medias/Smartwatches-Carnival-Carousel-Banner-11-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMjE3NjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2hjNy85OTQ1ODI3NzcwMzk4LmpwZ3xmM2IxYjAyZjAzMmZmODYzNjk4OTU5MzdlMzhjNTY1YzU1ZDk3N2Y2MzFiOGE1N2M2YjUxOTEyODE4YzRiNTFk"
   
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
        opacity={0.7}
        bg="white"
        color="black"
        paddingTop={10}
        paddingBottom={10}
        left={side}
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
        opacity={0.7}
        bg="white"
        color="black"
        paddingTop={10}
        paddingBottom={10}
        right={side}
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