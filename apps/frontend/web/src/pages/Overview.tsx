import { useState } from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';

const Overview = () => {
  const [shouldShowCheck, setShouldShowCheck] = useState(true);

  const handleGetCheck = async () => {
    const data = {
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
    <Box h="100vh">
      <ResourcesBar />
      <Navbar />
      <NavbarRooms />
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        pt="80px"
        px="80px"
        h="calc(100vh - 80px)"
      >
        <Text textAlign="center" fontSize="2rem" mb="2rem">
          {'Welcome to our wonderful city!'}
        </Text>
        <Flex
          flexDir="row"
          alignItems="stretch"
          justifyContent="center"
          w="100%"
        >
          <Image src="/mayor.svg" w="15rem" mr="-1.5rem" zIndex="2" />
          {shouldShowCheck ? (
            <Flex flexDir="column" alignItems="center" maxW="30rem">
              <Text
                textAlign="center"
                bgColor="turquoise.200"
                borderRadius="10px"
                p="1rem"
                mx="0.5rem"
              >
                {
                  'Cheer! You have just launched your digital services business! As mayor of the city I offer you 1,000 devDollars aid to set up in my municipality. Accept the money and start the adventure!'
                }
              </Text>
              <Button
                colorScheme="teal"
                onClick={handleGetCheck}
                display="flex"
                flexDir="column"
                borderRadius="15px"
                h="4.5rem"
                py="2.5rem"
                w="13rem"
                mt="2rem"
                mx="auto"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              >
                <Text>{'TAKE THE CHECK'}</Text>
                <Flex flexDir="row" alignContent="center" mt="0.25rem">
                  <Text fontWeight="thin" fontSize="1.5rem">
                    {'+'}
                  </Text>
                  <Flex
                    rounded="10px"
                    bgColor="gold.200"
                    ml="0.25rem"
                    px="10px"
                    py="2px"
                    borderRadius="20px"
                    boxShadow="xl"
                    alignItems="center"
                  >
                    <Image w="25px" src="/dollar.png" />
                    <Text ml="0.25rem" color="black" fontWeight="normal">
                      {'1000'}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </Flex>
          ) : (
            <Image src="/overview.jpg" />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Overview;
