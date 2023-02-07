import { Box, HStack, Image, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Room } from '@apps/backend-api';

const NavbarRooms = () => {
  const iconsSize: string = '30px';
  const paddingBetweenIcons: string = '15px';
  const paddingLeftIcons: string = '15px';
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('/api/rooms', {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => {
        setRooms(data);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Box
        boxShadow="inner"
        bg="blue.200"
        w={{ base: '100%', sm: '60px' }}
        h={{ base: '60px', sm: '100vh' }}
        position="absolute"
        top={{ sm: '0' }}
        bottom={{ base: '0', sm: 'initial' }}
        right={{ sm: '0' }}
        left={{ base: '0', sm: 'initial' }}
        overflow="scroll"
      >
        <Box bg="blue.500" h={{ base: '0px', sm: '80px' }} />
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
          {rooms.map((room) => (
            <Box key={room.id} pl={paddingLeftIcons} pt={paddingBetweenIcons}>
              <Link to={`/game/${room.label}`} state={{ room }}>
                <HStack>
                  <Image src={room.image} h={iconsSize} w={iconsSize} />
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
