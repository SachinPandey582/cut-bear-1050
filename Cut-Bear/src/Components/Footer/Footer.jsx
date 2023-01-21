import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    VisuallyHidden,
    useColorModeValue,
    Button,
  } from '@chakra-ui/react';
 
  import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
  
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <Button 
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Button>
    );
  };

  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('#003380', '#003380')}
        color={useColorModeValue('white', 'white')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Product Categories</ListHeader>
              <Link href={'#'}>SmartPhone</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Laptop</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>Tutorials</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Releases</Link>
              <Link href={'#'}>Tutorials</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Releases</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>PRODUCT CATEGORIES</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Careers</Link>
             
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Site Info</ListHeader>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
              <Link href={'#'}>Status</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Policies</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
          
          <Stack direction={'row'} spacing={6}>
            <SocialButton w={200} label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>

            {/* <Logo /> */}
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Reliance Digital. All Rights Reserved.
          </Text>
        </Box>
      </Box>
    );
  }