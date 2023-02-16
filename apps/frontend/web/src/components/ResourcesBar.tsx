import {
  Box,
  Flex,
  HStack,
  Image,
  useDisclosure,
  Text,
  IconButton,
  Grid,
  GridItem,
  Divider,
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import DrawerResources from './popups/DrawerResources';
import { useLocation, useParams } from 'react-router-dom';
import GameContext from '../contexts/GameContext';

const ResourcesBar = () => {
  const {
    isOpen: isOpenDrawerResources,
    onOpen: onOpenDrawerResources,
    onClose: onCloseDrawerResources,
  } = useDisclosure();

  const { label } = useParams();
  const {
    gameResourcesChar,
    setGameResourcesChar,
    gameRoom,
    setGameRoom,
    setGameCharacters,
    setGameEvents,
    setGameResources,
    setResourcesUsed,
    setResourcesProduced,
    setGameRooms,
    gameResources,
  } = useContext(GameContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    const handleRoom = async () => {
      try {
        const res = await fetch(`/api/game-rooms/by-label/${label}`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameRoom(jsonResponse);
      } catch {}
    };
    handleRoom();

    const interval = setInterval(() => {
      handleRoom();
    }, 3000);

    return () => {
      abortController.abort();
      clearInterval(interval);
    };
  }, [label]);

  useEffect(() => {
    const abortController = new AbortController();

    const handleRooms = async () => {
      try {
        const res = await fetch('/api/game-rooms', {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameRooms(jsonResponse);
      } catch {}
    };
    handleRooms();

    const handleCharacters = async () => {
      try {
        const res = await fetch(`/api/game-characters`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameCharacters(jsonResponse);
      } catch {}
    };
    handleCharacters();

    const handleEvents = async () => {
      try {
        const res = await fetch(`/api/game-events`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameEvents(jsonResponse);
      } catch {}
    };
    handleEvents();

    const handleResources = async () => {
      try {
        const res = await fetch(`/api/game-resources`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameResources(jsonResponse);
      } catch {}
    };
    handleResources();

    const handleResourcesUsed = async () => {
      try {
        const res = await fetch(`/api/resources-used`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setResourcesUsed(jsonResponse);
      } catch {}
    };

    handleResourcesUsed();

    const handleResourcesProduced = async () => {
      try {
        const res = await fetch(`/api/resources-produced`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setResourcesProduced(jsonResponse);
      } catch {}
    };

    handleResourcesProduced();

    const handleGameResourcesAndCharacters = async () => {
      try {
        const res = await fetch(
          `/api/game-resources/with-resources-used-and-produced`,
          {
            method: 'GET',
            signal: abortController.signal,
          }
        );
        const jsonResponse = await res.json();
        setGameResourcesChar(jsonResponse);
      } catch {}
    };
    handleGameResourcesAndCharacters();

    const interval = setInterval(() => {
      handleGameResourcesAndCharacters();
      handleCharacters();
    }, 3000);

    return () => {
      abortController.abort();
      clearInterval(interval);
    };
  }, []);

  return (
    <Flex
      position="fixed"
      mx="5rem"
      h="5rem"
      w="calc(100% - 10rem)"
      justifyContent="space-between"
      alignItems="center"
      px="2rem"
    >
      {pathname === '/game/overview' ? (
        <HStack>
          <Image
            w="3rem"
            h="3rem"
            src={gameRoom?.room.image}
            placeholder={gameRoom?.room.label}
          />
          <Text
            whiteSpace="nowrap"
            ml="1rem"
            fontSize="3xl"
            fontFamily="body"
            color="#000"
          >
            {'Overview'}
          </Text>
        </HStack>
      ) : (
        <>
          <HStack>
            <Image
              w="3rem"
              h="3rem"
              src={gameRoom?.room.image}
              placeholder={gameRoom?.room.label}
            />
            <Text
              whiteSpace="nowrap"
              ml="1rem"
              fontSize="3xl"
              fontFamily="body"
              color={`${gameRoom?.room.color}.900`}
            >
              {gameRoom?.room.name}
            </Text>
          </HStack>

          <Flex flexDir="row" mx="2rem" h="100%">
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Text mb="-0.2rem">{'Occupied'}</Text>
              <Text
                fontSize="1.5rem"
                color={`${gameRoom?.room.color}.900`}
                whiteSpace="nowrap"
              >{`${gameRoom?.size} m²`}</Text>
            </Flex>
            <Divider
              orientation="vertical"
              borderWidth="0.5px"
              borderColor="#ddd"
              height="50%"
              mx="1rem"
              my="auto"
            />
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Text mb="-0.2rem">{'Total'}</Text>
              <Text
                fontSize="1.5rem"
                whiteSpace="nowrap"
              >{`${gameRoom?.totalSize} m²`}</Text>
            </Flex>
          </Flex>
        </>
      )}

      <HStack>
        <Box>
          <HStack>
            <Grid
              gridTemplateColumns={{
                base: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
                xl: 'repeat(5, 1fr)',
              }}
              gap={2}
            >
              {gameResourcesChar.map((gameResource) => (
                <GridItem
                  key={gameResource.id}
                  bg={gameResource.resource.color}
                  px="10px"
                  py="5px"
                  borderRadius="20px"
                  boxShadow="xl"
                  display={{
                    base: gameResource.resource.order > 2 ? 'none' : 'inherit',
                    xl: 'inherit',
                  }}
                >
                  <HStack>
                    <Box boxSize="30px">
                      <Image src={gameResource.resource.image} />
                    </Box>
                    <Box> {gameResource.quantity}</Box>
                  </HStack>
                </GridItem>
              ))}
            </Grid>
          </HStack>
        </Box>

        <IconButton
          display={{ base: 'none', md: 'flex' }}
          size="md"
          aria-label="Resources"
          icon={<ArrowDownIcon />}
          rounded="100px"
          bg="white"
          border="1px"
          borderColor="black"
          boxShadow="inner"
          onClick={onOpenDrawerResources}
        />
      </HStack>

      <DrawerResources
        isOpen={isOpenDrawerResources}
        onClose={onCloseDrawerResources}
      />
    </Flex>
  );
};

export default ResourcesBar;
