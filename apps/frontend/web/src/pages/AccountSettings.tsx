import Navbar from '../components/Navbar';
import { Text, HStack, Box } from '@chakra-ui/react';

const AccountSettings = () => {
  return (
    <Box>
      <HStack>
        <Navbar />
        <Text>{'Account Settings'}</Text>
      </HStack>
    </Box>
  );
};

export default AccountSettings;
