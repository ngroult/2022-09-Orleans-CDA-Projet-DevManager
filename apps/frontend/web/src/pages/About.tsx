import { Box, Heading, Center, Image, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Box bgColor="#E4E4ED" h="100%">
      <Center>
        <Heading mt="20">{'La team'}</Heading>
      </Center>
      <Flex align="center" flexDir="column">
        <Image
          src="/nolwenn.jpg"
          alt="Nolwenn"
          w="40%"
          mt="10"
          borderRadius="10"
        />
        <Text mt="3" fontSize="lg">
          {'Nolwenn'}
        </Text>
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
        <Image src="/paul.jpg" alt="Paul" w="40%" mt="10" borderRadius="10" />
        <Text mt="3" fontSize="lg">
          {'Paul'}
        </Text>
        <Box mt="10" mb="10" as="u">
          <a href="https://www.flaticon.com/fr/">
            {'Icons Flaticon : Référence des icônes sur ce lien'}
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
