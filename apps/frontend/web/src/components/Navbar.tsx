import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  HStack,
  Heading,
  Center,
  Image,
  IconButton,
  Text,
  Grid,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon, HamburgerIcon } from '@chakra-ui/icons';
import AuthContext from '../contexts/AuthContext';
import DrawerNavbar from './DrawerNavbar';

const iconsSize = '30px';
const paddingBetweenIcons = '15px';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Box w={isNavbarOpen ? '220px' : '60px'} position="fixed" zIndex="999">
        <Box w="60px" h="80px" left="0" top="0">
          <Center>
            <IconButton
              aria-label="Hamburger button"
              icon={<HamburgerIcon />}
              colorScheme="white"
              color="black"
              onClick={onOpen}
              size="lg"
            />
          </Center>
        </Box>

        <Box
          display={{ base: 'none', sm: 'inline-block' }}
          boxShadow="inner"
          bg="blue.200"
          h="100vh"
          position="absolute"
          top="0"
          left="0"
        >
          <Box bg="blue.500" w={isNavbarOpen ? '220px' : '60px'} h="80px">
            {isNavbarOpen && (
              <Center>
                <Heading fontSize="xl" pt="25px">
                  {'DevManager'}
                </Heading>
              </Center>
            )}
          </Box>
          <Grid>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/game/overview" onClick={() => setIsNavOpen(false)}>
                <HStack>
                  <Image
                    alt="Resume Game"
                    src="/resume_game.png"
                    h={iconsSize}
                    w={iconsSize}
                  />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'Resume Game'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/leaderboard">
                <HStack>
                  <Image
                    alt="Leaderboard"
                    src="/leaderboard.png"
                    h={iconsSize}
                    w={iconsSize}
                  />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'Leaderboard'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/game-settings">
                <HStack>
                  <Image
                    alt="Game Settings"
                    src="/game_settings.png"
                    h={iconsSize}
                    w={iconsSize}
                  />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'Game Settings'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/account-settings">
                <HStack>
                  <Image
                    alt="Account Settings"
                    src="/account_settings.png"
                    h={iconsSize}
                    w={iconsSize}
                  />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'Account Settings'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/about">
                <HStack>
                  <Image
                    alt="About"
                    src="/about.png"
                    h={iconsSize}
                    w={iconsSize}
                  />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'About'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <HStack style={{ cursor: 'pointer' }} onClick={() => logout()}>
                <Image
                  alt="Logout"
                  src="/logout.png"
                  h={iconsSize}
                  w={iconsSize}
                />
                {isNavbarOpen && (
                  <Text pl={paddingBetweenIcons}>{'Logout'}</Text>
                )}
              </HStack>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/assistance">
                <HStack>
                  <Image
                    alt="Assistance"
                    src="/assistance.png"
                    h={iconsSize}
                    w={iconsSize}
                  />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'Assistance'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
          </Grid>
        </Box>
        <Center
          display={{ base: 'none', sm: 'flex' }}
          pl={isNavbarOpen ? '220px' : '60px'}
          pt="50vh"
        >
          <IconButton
            size="xs"
            aria-label="Search database"
            icon={isNavbarOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
            rounded="100px"
            bg="blue.500"
            boxShadow="inner"
            onClick={() => setIsNavbarOpen((prev) => !prev)}
            pos="absolute"
          />
        </Center>
      </Box>
      <DrawerNavbar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
