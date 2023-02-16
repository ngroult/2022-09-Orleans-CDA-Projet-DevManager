import { useState, useContext } from 'react';
import { Box, Divider, Flex, IconButton } from '@chakra-ui/react';
import GameContext from '../contexts/GameContext';
import NavbarTab from './NavbarTab';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const NavbarRooms = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { gameRooms } = useContext(GameContext);

  return (
    <>
      <Box
        display={{ base: 'none', sm: 'block' }}
        w={isNavbarOpen ? '20rem' : '5rem'}
        transition="width 0.5s"
        position="fixed"
        top="0"
        right="0"
        zIndex="100"
        boxShadow="rgb(0 0 0) 5px 1px 15px -10px inset"
        bg="blue.200"
        h="100vh"
        overflow="hidden"
      >
        <Box
          display={{ base: 'none', sm: 'block' }}
          boxShadow="rgb(0 0 0) 5px 1px 15px -10px inset"
          bg="blue.500"
          w="100%"
          h="5rem"
        />

        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="flex-end"
          py="1rem"
        >
          <NavbarTab
            type="right-navbar"
            path="/game/overview"
            text="Overview"
            src="/overview.png"
            setIsNavbarOpen={setIsNavbarOpen}
          />
          <Divider mx="auto" my="1rem" borderColor="grey" width="50%" />
          {gameRooms.map((gameRoom) => (
            <NavbarTab
              key={gameRoom.id}
              type="right-navbar"
              path={`/game/${gameRoom.room.label}`}
              text={gameRoom.room.name}
              src={gameRoom.room.image}
              setIsNavbarOpen={setIsNavbarOpen}
            />
          ))}
        </Flex>
      </Box>

      <IconButton
        display={{ base: 'none', sm: 'flex' }}
        icon={isNavbarOpen ? <ArrowRightIcon /> : <ArrowLeftIcon />}
        position="fixed"
        zIndex="101"
        top="50vh"
        right={isNavbarOpen ? 'calc(20rem - 1rem)' : 'calc(5rem - 1rem)'}
        transition="right 0.5s"
        w="2rem"
        h="2rem"
        size="xs"
        rounded="100%"
        bg="blue.500"
        _hover={{ bgColor: 'blue.500' }}
        onClick={() => setIsNavbarOpen((prev) => !prev)}
        aria-label="Toggle navbar"
      />

      <Box
        display={isNavbarOpen ? 'block' : 'none'}
        position="absolute"
        zIndex="99"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgColor={isNavbarOpen ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)'}
        transition="background-color 2s"
        onClick={() => setIsNavbarOpen(false)}
      />
    </>
  );
};

export default NavbarRooms;
