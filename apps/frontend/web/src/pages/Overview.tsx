import React from 'react';
import { Box, Image, Text, HStack, VStack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';

const Overview = () => {
  return (
    <Box>
      <ResourcesBar />
      <HStack>
        <Navbar />
        <NavbarRooms />
        <VStack>
          <Text fontSize="xl">{'Overview'}</Text>
          <Image boxSize="60%" src="/overview.jpg" />
        </VStack>
      </HStack>
    </Box>
  );
};

export default Overview;
