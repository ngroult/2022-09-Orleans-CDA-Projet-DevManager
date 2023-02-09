import { Box, HStack, Image, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GameRoom } from '@apps/backend-api';

const NavbarRooms = () => {
  const iconsSize: string = '30px';
  const paddingBetweenIcons: string = '15px';
  const paddingLeftIcons: string = '15px';
  const [gameRooms, setGameRooms] = useState<GameRoom[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('/api/game-rooms', {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => {
        setGameRooms(data);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Box
        boxShadow="rgb(0 0 0) 5px 1px 15px -10px inset"
        bg="blue.200"
        w={{ base: '100%', sm: '60px' }}
        h={{ base: '60px', sm: '100vh' }}
        position="absolute"
        top={{ sm: '0' }}
        bottom={{ base: '0', sm: 'initial' }}
        right={{ sm: '0' }}
        left={{ base: '0', sm: 'initial' }}
      >
        <Box
          boxShadow="rgb(0 0 0) 5px 1px 15px -10px inset"
          bg="blue.500"
          h={{ base: '0px', sm: '80px' }}
        />
        <Flex
          flexDir={{ base: 'row', sm: 'column' }}
          justifyContent="space-around"
        >
          <Box pl={paddingLeftIcons} pt={paddingBetweenIcons}>
            <Link to="/game/overview">
              <HStack>
                <Image src="/overview.png" h={iconsSize} w={iconsSize} />
              </HStack>
            </Link>
          </Box>
          {gameRooms.map((gameRoom) => (
            <Box
              key={gameRoom.id}
              pl={paddingLeftIcons}
              pt={paddingBetweenIcons}
            >
              <Link to={`/game/${gameRoom.room.label}`} state={{ gameRoom }}>
                <HStack>
                  <Image
                    src={gameRoom.room.image}
                    h={iconsSize}
                    w={iconsSize}
                  />
                </HStack>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default NavbarRooms;
