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
import { useContext, useEffect, useState } from 'react';
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

  const [isShrinkedArea, setIsShrinkedArea] = useState(false);
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
    <>
      <Flex
        display={{ base: 'none', sm: 'flex' }}
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
            <Image w="3rem" h="3rem" src="/overview.png" />
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

            {gameRoom?.room.isExpandable ? (
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
            ) : null}
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
                      base:
                        gameResource.resource.order > 2 ? 'none' : 'inherit',
                      xl: 'inherit',
                    }}
                  >
                    <HStack>
                      <Box boxSize="30px">
                        <Image src={gameResource.resource.image} />
                      </Box>
                      <Text fontWeight="bold">{gameResource.quantity}</Text>
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
      </Flex>

      <Flex
        display={{ base: 'flex', sm: 'none' }}
        flexDir="column"
        position="absolute"
        h="6rem"
        w="100%"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Flex
          flexDir="row"
          h="3rem"
          ml="3rem"
          mr="0.5rem"
          w="calc(100% - 3.5rem)"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid
            gridTemplateColumns={{
              base: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
              xl: 'repeat(5, 1fr)',
            }}
            gap="0.5rem"
            alignContent="center"
            justifyItems="stretch"
          >
            {gameResourcesChar.map((gameResource) => (
              <GridItem
                key={gameResource.id}
                bg={gameResource.resource.color}
                px="0.5rem"
                py="0.3rem"
                borderRadius="20px"
                boxShadow="md"
                flexDir="row"
                alignItems="center"
                justifyContent="flex-start"
                display={{
                  base: gameResource.resource.order > 2 ? 'none' : 'flex',
                  xl: 'flex',
                }}
              >
                <Image h="1.5rem" src={gameResource.resource.image} />
                <Text ml="0.3rem">{gameResource.quantity}</Text>
              </GridItem>
            ))}
          </Grid>
          <IconButton
            display="flex"
            w="2rem"
            h="2rem"
            ml="0.5rem"
            aria-label="Resources"
            icon={<ArrowDownIcon />}
            rounded="1rem"
            bg="white"
            border="1px"
            borderColor="black"
            onClick={onOpenDrawerResources}
          />
        </Flex>

        {pathname === '/game/overview' ? (
          <HStack mx="0.5rem">
            <Image
              w="2rem"
              h="2rem"
              src="/overview.png"
              placeholder="Overview"
            />
            <Text
              whiteSpace="nowrap"
              ml="0.5rem"
              fontSize="xl"
              fontFamily="body"
              color="#000"
            >
              {'Overview'}
            </Text>
          </HStack>
        ) : (
          <Flex flexDir="row" mx="0.5rem">
            <Flex flexDir="row" alignItems="center" justifyContent="center">
              <Image
                w="2rem"
                h="2rem"
                src={gameRoom?.room.image}
                placeholder={gameRoom?.room.label}
              />
              <Text
                whiteSpace="nowrap"
                ml="0.5rem"
                fontSize="xl"
                fontFamily="body"
                color={`${gameRoom?.room.color}.900`}
              >
                {gameRoom?.room.name}
              </Text>
            </Flex>

            {gameRoom?.room.isExpandable ? (
              isShrinkedArea ? (
                <Flex flexDir="row" mx="2rem" h="100%">
                  <Flex
                    flexDir="column"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Text mb="-0.2rem">{'Occupied'}</Text>
                    <Text
                      fontSize="1rem"
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
                      fontSize="1rem"
                      whiteSpace="nowrap"
                    >{`${gameRoom?.totalSize} m²`}</Text>
                  </Flex>
                </Flex>
              ) : (
                <Flex
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  mx="2rem"
                  h="100%"
                >
                  <Text
                    fontSize="1rem"
                    color={`${gameRoom?.room.color}.900`}
                    whiteSpace="nowrap"
                  >{`${gameRoom?.size} m²`}</Text>
                  <Divider
                    orientation="horizontal"
                    borderWidth="0.5px"
                    borderColor="#ddd"
                    width="75%"
                    mx="auto"
                  />
                  <Text
                    fontSize="0.8rem"
                    whiteSpace="nowrap"
                  >{`${gameRoom?.totalSize} m²`}</Text>
                </Flex>
              )
            ) : null}
          </Flex>
        )}
      </Flex>

      <DrawerResources
        isOpen={isOpenDrawerResources}
        onClose={onCloseDrawerResources}
      />
    </>
  );
};

export default ResourcesBar;
