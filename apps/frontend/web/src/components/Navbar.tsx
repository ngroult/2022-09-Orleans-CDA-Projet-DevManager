import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  Center,
  IconButton,
  Flex,
  Divider,
} from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import AuthContext from '../contexts/AuthContext';
import NavbarTab from './NavbarTab';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const logout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'GET' });
      const jsonResponse = await response.json();

      if (jsonResponse.status === 'ok') {
        setUser(null);
        navigate('/');
      }
    } catch (err) {}
  };

  return (
    <>
      <Box
        display={{ base: 'none', sm: 'block' }}
        w={isNavbarOpen ? '20rem' : '5rem'}
        transition="width 0.5s"
        position="fixed"
        zIndex="100"
        boxShadow="rgb(0 0 0) -5px 0px 15px -10px inset"
        bg="blue.200"
        h="100vh"
        overflow="hidden"
      >
        <Box
          display={{ base: 'none', sm: 'block' }}
          boxShadow="rgb(0 0 0) -5px 0px 15px -10px inset"
          bg="blue.500"
          w="100%"
          h="5rem"
        >
          {isNavbarOpen && (
            <Center>
              <Heading fontSize="xl" pt="25px">
                {'DevManager'}
              </Heading>
            </Center>
          )}
        </Box>

        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="flex-start"
          py="1rem"
        >
          <NavbarTab
            type="left-navbar"
            path="/game/overview"
            text="Resume Game"
            src="/resume_game.png"
            setIsNavbarOpen={setIsNavbarOpen}
          />
          <NavbarTab
            type="left-navbar"
            path="/leaderboard"
            text="Leaderboard"
            src="/leaderboard.png"
            setIsNavbarOpen={setIsNavbarOpen}
          />
          <Divider mx="auto" my="1rem" borderColor="grey" width="50%" />
          <NavbarTab
            type="left-navbar"
            path="/game-settings"
            text="Game Settings"
            src="/game_settings.png"
            setIsNavbarOpen={setIsNavbarOpen}
          />
          <NavbarTab
            type="left-navbar"
            path="/account-settings"
            text="Account Settings"
            src="/account_settings.png"
            setIsNavbarOpen={setIsNavbarOpen}
          />
          <Divider mx="auto" my="1rem" borderColor="grey" width="50%" />
          <NavbarTab
            type="left-navbar"
            path="/assistance"
            text="Assistance"
            src="/assistance.png"
            setIsNavbarOpen={setIsNavbarOpen}
          />
          <NavbarTab
            type="left-navbar"
            path="/about"
            text="About"
            src="/about.png"
            setIsNavbarOpen={setIsNavbarOpen}
          />
          <NavbarTab
            type="left-navbar"
            path=""
            text="Logout"
            src="/logout.png"
            setIsNavbarOpen={setIsNavbarOpen}
            logout={logout}
          />
        </Flex>
      </Box>

      <IconButton
        display={{ base: 'none', sm: 'flex' }}
        icon={isNavbarOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        position="fixed"
        zIndex="101"
        top="50vh"
        left={isNavbarOpen ? 'calc(20rem - 1rem)' : 'calc(5rem - 1rem)'}
        transition="left 0.5s"
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

export default Navbar;
