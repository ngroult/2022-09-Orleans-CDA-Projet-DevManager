import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';
import { Text, Box } from '@chakra-ui/react';

const Room = () => {
  return (
    <Box>
      <ResourcesBar />
      <Navbar />
      <NavbarRooms />
      <Text>{'Room'}</Text>
    </Box>
  );
};

export default Room;
