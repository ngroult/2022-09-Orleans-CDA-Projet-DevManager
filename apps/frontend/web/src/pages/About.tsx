import { Box, Heading, Center, Image, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Box
        bgColor="#E4E4ED"
        minH="100vh"
        position="absolute"
        top="0"
        margin="auto"
        w="100%"
        zIndex="-1"
      >
        <Center>
          <Heading mt="20">{'The team'}</Heading>
        </Center>
        <Box
          display="flex"
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          mt={{ base: '5', md: '20' }}
          ml={{ base: '0', md: '20' }}
        >
          <Box>
            <Image
              src="/nolwenn.jpg"
              alt="Nolwenn"
              w={{ base: '40%', sm: '40%', md: '65%' }}
              mt="10"
              borderRadius="10"
            />
            <Text mt="3" fontSize="lg">
              {'Nolwenn'}
            </Text>
          </Box>
          <Box>
            <Image
              src="/corentin.jpg"
              alt="Corentin"
              w="40%"
              mt="10"
              borderRadius="10"
            />
            <Text mt="3" fontSize="lg">
              {'Corentin'}
            </Text>
          </Box>
          <Box>
            <Image
              src="/kylian.jpg"
              alt="Kylian"
              w="40%"
              mt="10"
              borderRadius="10"
            ></Image>
            <Text mt="3" fontSize="lg">
              {'Kylian'}
            </Text>
          </Box>
          <Box>
            <Image
              src="/paul.jpg"
              alt="Paul"
              w="40%"
              mt="10"
              borderRadius="10"
            />
            <Text mt="3" fontSize="lg">
              {'Paul'}
            </Text>
          </Box>
        </Box>
        <Center mt={{ base: '10', md: '40' }} mb="10" as="u">
          <a href="https://www.flaticon.com/fr/" target="_blank">
            {'Icons Flaticon : Icon reference on this link'}
          </a>
        </Center>
      </Box>
    </>
  );
};

export default About;
