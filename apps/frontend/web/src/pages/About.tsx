import { Box, Heading, Center, Image, Text, Flex } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      bgColor="#E4E4ED"
      minH="100vh"
      ml={{ base: 0, sm: '5rem' }}
      flexDir="column"
    >
      <Center>
        <Heading mt="20">{'The team'}</Heading>
      </Center>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir={{ base: 'column', md: 'row' }}
        mt={{ base: '5', md: '20' }}
        mx="auto"
      >
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
          mb={{ base: '2rem', md: 0 }}
          mx={{ base: 0, sm: '1rem' }}
        >
          <Image
            src="/nolwenn.jpg"
            alt="Nolwenn"
            w="7rem"
            h="7rem"
            borderRadius="1rem"
          />
          <Text mt="3" fontSize="lg">
            {'Nolwenn'}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
          mb={{ base: '2rem', md: 0 }}
          mx={{ base: 0, sm: '1rem' }}
        >
          <Image
            src="/corentin.jpg"
            alt="Corentin"
            w="7rem"
            h="7rem"
            borderRadius="1rem"
          />
          <Text mt="3" fontSize="lg">
            {'Corentin'}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
          mb={{ base: '2rem', md: 0 }}
          mx={{ base: 0, sm: '1rem' }}
        >
          <Image
            src="/kylian.jpg"
            alt="Kylian"
            w="7rem"
            h="7rem"
            borderRadius="1rem"
          ></Image>
          <Text mt="3" fontSize="lg">
            {'Kylian'}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
          mb={{ base: '2rem', md: 0 }}
          mx={{ base: 0, sm: '1rem' }}
        >
          <Image
            src="/paul.jpg"
            alt="Paul"
            w="7rem"
            h="7rem"
            borderRadius="1rem"
          />
          <Text mt="3" fontSize="lg">
            {'Paul'}
          </Text>
        </Flex>
      </Flex>
      <Center mt={{ base: '10', md: '40' }} mb="10" as="u">
        <a href="https://www.flaticon.com/fr/" target="_blank">
          {'Icons Flaticon : Icon reference on this link'}
        </a>
      </Center>
    </Flex>
  );
};

export default About;
