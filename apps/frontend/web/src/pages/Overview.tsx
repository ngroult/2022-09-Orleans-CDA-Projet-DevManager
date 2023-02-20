import { useEffect, useState, useContext } from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';
import GameContext from '../contexts/GameContext';

const Overview = () => {
  const { gameResources, gameRooms } = useContext(GameContext);
  const [shouldShowCheck, setShouldShowCheck] = useState(false);

  useEffect(() => {
    if (gameRooms.length && gameResources.length) {
      const [firstRoom] = gameRooms.filter(
        (gameRoom) => gameRoom.room.order === 1
      );
      const [devDollars] = gameResources.filter(
        (gameResource) => gameResource.resource.name === 'DevDollars'
      );

      if (firstRoom.totalSize === 0 && devDollars.quantity === 0)
        setShouldShowCheck(true);
    }
  }, [gameRooms, gameResources]);

  const handleGetCheck = async () => {
    try {
      const req = await fetch('/api/games/take-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await req.json();

      if (req.ok) {
        if (res.status === 'ok') {
          setShouldShowCheck(false);
        }
      }
    } catch {}
  };

  return (
    <Box h={{ base: 'calc(100vh - 5rem)', sm: '100vh' }}>
      <ResourcesBar />
      <Navbar />
      <NavbarRooms />
      {shouldShowCheck ? (
        <Flex
          flexDir="column"
          h={{ base: 'calc(100vh - 5rem)', sm: '100vh' }}
          pt={{ base: '6rem', sm: '5rem' }}
          mx={{ base: '0', sm: '5rem' }}
          justifyContent="center"
        >
          <Text
            textAlign="center"
            fontSize={{ base: '1.5rem', sm: '2rem' }}
            mt={{ base: '1rem', sm: '0' }}
            mb="2rem"
          >
            {'Welcome to our wonderful city!'}
          </Text>
          <Flex
            flexDir="row"
            alignItems="stretch"
            justifyContent="center"
            w="100%"
          >
            <Image
              display={{ base: 'none', sm: 'block' }}
              src="/mayor.svg"
              w="15rem"
              mr="-1.5rem"
              zIndex="2"
            />
            <Flex flexDir="column" alignItems="center" maxW="30rem">
              <Text
                textAlign="center"
                bgColor="turquoise.200"
                borderRadius="10px"
                p="1rem"
                mx="0.5rem"
              >
                {
                  'Cheer! You have just launched your digital services business! As mayor of the city I offer you 5,000 devDollars aid to set up in my municipality. Accept the money and start the adventure!'
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
                    <Text ml="0.25rem" color="black" fontWeight="bold">
                      {'5000'}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          flexDir="column"
          h={{ base: 'calc(100vh - 5rem)', sm: '100vh' }}
          pt={{ base: '6rem', sm: '5rem' }}
          mx={{ base: '0', sm: '5rem' }}
          justifyContent="center"
        >
          <Box
            w="100%"
            h="100%"
            bgImage="/placeholder.png"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
        </Flex>
      )}
    </Box>
  );
};

export default Overview;
