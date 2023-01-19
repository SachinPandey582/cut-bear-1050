import {  Center, Heading, Input,  Stack } from '@chakra-ui/react'
import React from 'react'

const Skeleton1 = () => {
  return (
    
        <Stack border={"2px solid"} w="100%">
         <Center>
         <Heading>Loading...</Heading>
         </Center>
         <Input p={20} bg={"red"} type="text" />
         <Input p={20} bg={"red"} type="text" />
         <Input p={20} bg={"red"} type="text" />
         <Input p={20} bg={"red"} type="text" />
         <Input p={20} bg={"red"} type="text" />
         <Input p={20} bg={"red"} type="text" />
         <Input p={20} bg={"red"} type="text" />

 
</Stack>
  
  )
}

export default Skeleton1