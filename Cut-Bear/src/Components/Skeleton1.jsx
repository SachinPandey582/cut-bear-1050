import {  Box, Center, Heading, Input,  SkeletonCircle,  SkeletonText,  Stack } from '@chakra-ui/react'
import React from 'react'

const Skeleton1 = () => {
  return (
    
        <Stack border={"2px solid"} w="100%">
        <Box padding='6' boxShadow='lg' bg='red.400'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={40} spacing='40' skeletonHeight='20' />
</Box>

 
</Stack>
  
  )
}

export default Skeleton1