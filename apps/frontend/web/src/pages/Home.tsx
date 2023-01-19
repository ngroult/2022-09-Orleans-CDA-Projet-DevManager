import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Image
        src="/overview.jpg"
        h="100vh"
        objectFit="cover"
        alt="Overview"
        zIndex={-1}
        position="absolute"
      />
      <Flex justify="center" m="20">
        <Box
          w="50vw"
          h="25vh"
          bg="#797AA6"
          opacity="90%"
          border="1px"
          borderRadius="5px"
        >
          <Text color="white" m="5px">
            {'Welcome to DevManager!'}
          </Text>
        </Box>
      </Flex>
      <Flex justify="center" mb="7">
        <Link to="/login">
          <Button bg="#42B7B4" color="white" fontWeight="normal" w="12rem">
            {'Sign up'}
          </Button>
        </Link>
      </Flex>
      <Flex justify="center">
        <Link to="/register">
          <Button bg="#797AA6" color="white" fontWeight="normal" w="12rem">
            {'Create your account'}
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
