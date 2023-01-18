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
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import DrawerNavbar from './DrawerNavbar';

const Navbar = () => {
  const iconsSize: string = '30px';
  const paddingBetweenIcons: string = '15px';
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <Box w={isNavbarOpen ? '220px' : '60px'}>
        <Box w="60px" h="80px" left="0" top="0" position="fixed">
          <Center>
            <IconButton
              aria-label="Hamburger button"
              icon={<HamburgerIcon />}
              ref={btnRef}
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
          w={isNavbarOpen ? '220px' : '60px'}
          h="100vh"
          position="absolute"
          top="0"
          left="0"
          overflow="scroll"
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
                  <Image src="/resume_game.png" h={iconsSize} w={iconsSize} />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'Resume Game'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/leaderboard">
                <HStack>
                  <Image src="/leaderboard.png" h={iconsSize} w={iconsSize} />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'Leaderboard'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/game-settings">
                <HStack>
                  <Image src="/game_settings.png" h={iconsSize} w={iconsSize} />
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
                  <Image src="/about.png" h={iconsSize} w={iconsSize} />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'About'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/">
                <HStack>
                  <Image src="/logout.png" h={iconsSize} w={iconsSize} />
                  {isNavbarOpen && (
                    <Text pl={paddingBetweenIcons}>{'Logout'}</Text>
                  )}
                </HStack>
              </Link>
            </Box>
            <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
              <Link to="/assistance">
                <HStack>
                  <Image src="/assistance.png" h={iconsSize} w={iconsSize} />
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
      <DrawerNavbar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
};

export default Navbar;
