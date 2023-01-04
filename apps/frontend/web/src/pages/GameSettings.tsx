import Navbar from '../components/Navbar';
import { Text, HStack, Box } from '@chakra-ui/react';

const GameSettings = () => {
  return (
    <Box>
      <HStack>
        <Navbar />
        <Text>{'Game Settings'}</Text>
      </HStack>
    </Box>
  );
};

export default GameSettings;
