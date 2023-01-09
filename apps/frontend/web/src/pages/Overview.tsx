import { useState } from 'react';
import { Box, Image, Text, Button, HStack, VStack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';

const Overview = () => {
  const [shouldShowCheck, setShouldShowCheck] = useState(true);

  const handleGetCheck = async () => {
    const data = {
      quantity: 1000,
      gameId: 1,
      resourceId: 1,
    };

    try {
      const rawResponse = await fetch('/api/game-resources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const jsonResponse = await rawResponse.json();

      if (rawResponse.ok) {
        if (jsonResponse.status === 'ok') {
          setShouldShowCheck(false);
        } else {
          if (jsonResponse.errorResource) {
            console.error(jsonResponse.errorResource);
          }
          if (jsonResponse.errorGame) {
            console.error(jsonResponse.errorGame);
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <ResourcesBar />
      <HStack>
        <Navbar />
        <NavbarRooms />
        <VStack>
          <Text fontSize="xl">{'Overview'}</Text>
          {shouldShowCheck ? (
            <>
              <Text maxW="500px" textAlign="center" m="1rem 0">
                {
                  'Cheer! You have just launched your digital services business! The mayor of the city offers you $ 1,000 aid to set up in his municipality. Accept the money and start the adventure!'
                }
              </Text>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={handleGetCheck}
                display="flex"
                flexDir="column"
              >
                <Text>{'Take the check'}</Text>
                <Text>{'+ $1,000'}</Text>
              </Button>
            </>
          ) : (
            <Image src="/overview.jpg" />
          )}
        </VStack>
      </HStack>
    </Box>
  );
};

export default Overview;
