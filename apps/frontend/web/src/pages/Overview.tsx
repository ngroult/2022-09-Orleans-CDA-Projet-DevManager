import { useState } from 'react';
import {
  Box,
  Image,
  Text,
  Button,
  HStack,
  VStack,
  Center,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';

const Overview = () => {
  return (
    <Box h="100vh">
      <ResourcesBar />
      <Navbar />
      <NavbarRooms />
      <Center>
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          maxW="550px"
          mt="300"
        >
          <HStack>
            <VStack>
              <Text fontSize="xl">{'Overview'}</Text>
              <Box>
                <Text textAlign="center" m="1rem 0">
                  {
                    'Cheer! You have just launched your digital services business! The mayor of the city offers you $ 1,000 aid to set up in his municipality. Accept the money and start the adventure!'
                  }
                </Text>
                <Button
                  colorScheme="teal"
                  size="lg"
                  display="flex"
                  flexDir="column"
                >
                  <Text>{'Take the check'}</Text>
                  <Text>{'+ $1,000'}</Text>
                </Button>
              </Box>
              <Image src="/overview.jpg" />
            </VStack>
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Overview;
