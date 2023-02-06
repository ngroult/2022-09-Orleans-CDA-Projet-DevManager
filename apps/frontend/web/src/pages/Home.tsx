import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      bgImage="url('./overview.jpg')"
      bgSize="100rem"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100vw"
      h="100vh"
    >
      <Center>
        <Image src="./developer-splash.png" w="10%" />
      </Center>
      <Center>
        <Heading color="#42B7B4" size="3xl">
          {'DevManager'}
        </Heading>
      </Center>
      <Center>
        <Box w="500px" display="flex" align="center" mt="5rem" mb="5rem">
          <Text color="black" m="5px">
            {
              'Welcome to DevManager! The first game where you can manage a full crew of a dev company! With a 2D style , and a simple and intuitive gameplay'
            }
          </Text>
        </Box>
      </Center>
      <Flex justify="center" mb="7" gap="10">
        <Link to="/login">
          <Button
            bg="#42B7B4"
            _hover={{ bg: '#5BE06E' }}
            color="white"
            fontWeight="normal"
            w={{ base: '5rem', sm: '12rem' }}
          >
            {'Login'}
          </Button>
        </Link>
        <Link to="/register">
          <Button
            bg="#797AA6"
            _hover={{ bg: '#3744E0' }}
            color="white"
            fontWeight="normal"
            w={{ base: '10rem', sm: '12rem' }}
          >
            {'Create your account'}
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
