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
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const iconsSize: string = '30px';
  const paddingBetweenIcons: string = '15px';
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Box w={`${isOpen ? '220px' : '60px'}`}>
      <Box
        boxShadow="inner"
        bg="blue.200"
        w={`${isOpen ? '220px' : '60px'}`}
        h="100vh"
        position="absolute"
        top="0"
        left="0"
        overflow="scroll"
      >
        <Box bg="blue.500" w={`${isOpen ? '220px' : '60px'}`} h="80px">
          {isOpen && (
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
                {isOpen && (
                  <Text pl={paddingBetweenIcons}>{'Resume Game'}</Text>
                )}
              </HStack>
            </Link>
          </Box>
          <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
            <Link to="/leaderboard">
              <HStack>
                <Image src="/leaderboard.png" h={iconsSize} w={iconsSize} />
                {isOpen && (
                  <Text pl={paddingBetweenIcons}>{'Leaderboard'}</Text>
                )}
              </HStack>
            </Link>
          </Box>
          <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
            <Link to="/game-settings">
              <HStack>
                <Image src="/game_settings.png" h={iconsSize} w={iconsSize} />
                {isOpen && (
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
                {isOpen && (
                  <Text pl={paddingBetweenIcons}>{'Account Settings'}</Text>
                )}
              </HStack>
            </Link>
          </Box>
          <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
            <Link to="/about">
              <HStack>
                <Image src="/about.png" h={iconsSize} w={iconsSize} />
                {isOpen && <Text pl={paddingBetweenIcons}>{'About'}</Text>}
              </HStack>
            </Link>
          </Box>
          <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
            <Link to="/">
              <HStack>
                <Image src="/logout.png" h={iconsSize} w={iconsSize} />
                {isOpen && <Text pl={paddingBetweenIcons}>{'Logout'}</Text>}
              </HStack>
            </Link>
          </Box>
          <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
            <Link to="/assistance">
              <HStack>
                <Image src="/assistance.png" h={iconsSize} w={iconsSize} />
                {isOpen && <Text pl={paddingBetweenIcons}>{'Assistance'}</Text>}
              </HStack>
            </Link>
          </Box>
        </Grid>
      </Box>
      <Center pl={`${isOpen ? '220px' : '60px'}`} pt="50vh">
        <IconButton
          size="xs"
          aria-label="Search database"
          icon={isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          rounded="100px"
          bg="blue.500"
          boxShadow="inner"
          onClick={() => setIsOpen((prev) => !prev)}
          pos="absolute"
        />
      </Center>
    </Box>
  );
};

export default Navbar;
