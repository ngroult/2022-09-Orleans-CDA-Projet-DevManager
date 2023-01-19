import {
  Box,
  HStack,
  Heading,
  Center,
  Image,
  IconButton,
  Text,
  Grid,
} from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Room } from '@apps/backend-api';

const NavbarRooms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconsSize: string = '30px';
  const paddingBetweenIcons: string = '15px';
  const paddingLeftIcons: string = isOpen ? '30px' : '15px';
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
    <Box w={`${isOpen ? '220px' : '60px'}`}>
      <Box
        boxShadow="inner"
        bg="blue.200"
        w={`${isOpen ? '220px' : '60px'}`}
        h="100vh"
        position="absolute"
        top="0"
        right="0"
        overflow="scroll"
      >
        <Box bg="blue.500" w={`${isOpen ? '220px' : '60px'}`} h="80px" />
        <Grid>
          <Box pl={paddingLeftIcons} pt={paddingBetweenIcons}>
            <Link to="/game/overview">
              <HStack>
                <Image src="/overview.png" h={iconsSize} w={iconsSize} />
                {isOpen && <Text pl={paddingBetweenIcons}>{'Overview'}</Text>}
              </HStack>
            </Link>
          </Box>
          {rooms.map((room) => (
            <Box key={room.id} pl={paddingLeftIcons} pt={paddingBetweenIcons}>
              <Link to={`/game/${room.label}`} state={{ room }}>
                <HStack>
                  <Image src={room.image} h={iconsSize} w={iconsSize} />
                  {isOpen && <Text pl={paddingBetweenIcons}>{room.name}</Text>}
                </HStack>
              </Link>
            </Box>
          ))}
        </Grid>
        <Center pt="22vh">
          <IconButton
            size="xs"
            aria-label="Search database"
            icon={isOpen ? <ArrowRightIcon /> : <ArrowLeftIcon />}
            rounded="100px"
            bg="blue.500"
            boxShadow="inner"
            onClick={() => setIsOpen((prev) => !prev)}
            pos="absolute"
          />
        </Center>
      </Box>
    </Box>
  );
};

export default NavbarRooms;
