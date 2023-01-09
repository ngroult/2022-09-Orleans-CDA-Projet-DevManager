import Navbar from '../components/Navbar';
import { Text, HStack, Box } from '@chakra-ui/react';

const Assistance = () => {
  return (
    <Box>
      <HStack>
        <Navbar />
        <Text>{'Assistance'}</Text>
      </HStack>
    </Box>
  );
};

export default Assistance;
