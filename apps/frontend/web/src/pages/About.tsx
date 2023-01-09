import Navbar from '../components/Navbar';
import { Text, HStack, Box } from '@chakra-ui/react';
const About = () => {
  return (
    <Box>
      <HStack>
        <Navbar />
        <Text>{'About'}</Text>
      </HStack>
    </Box>
  );
};

export default About;
