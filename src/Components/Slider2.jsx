import { Box, Image, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'

const Slider2 = () => {
  return (
    <Box>
        <SimpleGrid columns={{base:"1",md:'2',lg:"4"}} gap={10}>
            <Box overflow={"hidden"}>
                <Image _hover={{transform:"scale(1.1)"}} transition={"transform 2s"} src='https://www.reliancedigital.in/medias/Neckband-True-Wireless-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaDEyLzk5NTA0NTA0MTc2OTQuanBnfDAxOWRiN2Q5NWE2YmRjY2RhYWUyZjkwOGU2M2NlYzA5MzFlMzI4YjJlOGQ4OTc5NTQ2M2VkYjlmMTU5NmMwNzM' alt='ajkshd'>
                    
                </Image>
            </Box>
            <Box  overflow={"hidden"}>
                <Image _hover={{transform:"scale(1.1)"}} transition={"transform 2s"} src='https://www.reliancedigital.in/medias/Neckband-True-Wireless-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaDEyLzk5NTA0NTA0MTc2OTQuanBnfDAxOWRiN2Q5NWE2YmRjY2RhYWUyZjkwOGU2M2NlYzA5MzFlMzI4YjJlOGQ4OTc5NTQ2M2VkYjlmMTU5NmMwNzM' alt='ajkshd'>
                    
                </Image>
            </Box>
            <Box  overflow={"hidden"} >
                <Image _hover={{transform:"scale(1.1)"}} transition={"transform 2s"} src='https://www.reliancedigital.in/medias/Neckband-True-Wireless-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaDEyLzk5NTA0NTA0MTc2OTQuanBnfDAxOWRiN2Q5NWE2YmRjY2RhYWUyZjkwOGU2M2NlYzA5MzFlMzI4YjJlOGQ4OTc5NTQ2M2VkYjlmMTU5NmMwNzM' alt='ajkshd'>
                    
                </Image>
            </Box>
            <Box  overflow={"hidden"}>
                <Image _hover={{transform:"scale(1.1)"}} transition={"transform 2s"} src='https://www.reliancedigital.in/medias/Neckband-True-Wireless-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaDEyLzk5NTA0NTA0MTc2OTQuanBnfDAxOWRiN2Q5NWE2YmRjY2RhYWUyZjkwOGU2M2NlYzA5MzFlMzI4YjJlOGQ4OTc5NTQ2M2VkYjlmMTU5NmMwNzM' alt='ajkshd'>
                    
                </Image>
            </Box>
        </SimpleGrid>
    </Box>
  )
}

export default Slider2