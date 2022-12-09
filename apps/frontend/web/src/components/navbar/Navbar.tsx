import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Center,
  Image,
  Spacer,
  IconButton,
  Text,
  Grid,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <Box
      boxShadow="inner"
      bg="blue.200"
      w="250px"
      h="1080px"
      position="absolute"
      top="0"
      left="0"
    >
      <Grid>
        <Box bg="blue.500" w="80px" h="80px">
          <Center>
            <Heading>D</Heading>
          </Center>
        </Box>
        <Spacer />
        <Box pl="20px" pt="20px">
          <HStack>
          <Image
            src="/resume_game.png"
            h="40px"
            w="40px"
            filter="grayscale(80%)"
          />
          <Text pl="20px">Resume Game</Text>
          </HStack>
        </Box>
        <Box pl="20px" pt="20px">
          <HStack>
            <Image src="/leaderboard.png" h="40px" w="40px" />
            <Text pl="20px">Leaderboard</Text>
          </HStack>
        </Box>
        <Spacer />
        <Box pl="20px" pt="20px">
          <HStack>
            <Image src="/game_settings.png" h="40px" w="40px" />
            <Text pl="20px">Game Settings</Text>
          </HStack>
        </Box>
        <Box pl="20px" pt="20px">
          <HStack>
            <Image src="/account_settings.png" h="40px" w="40px" />
            <Text  pl="20px">Account Settings</Text>
          </HStack>
        </Box>
        <Box pl="20px" pt="20px">
          <HStack>
            <Image src="/about.png" h="40px" w="40px" />
            <Text  pl="20px">About</Text>
          </HStack>
        </Box>
        <Box pl="20px" pt="20px">
          <HStack>
            <Image src="/logout.png" h="40px" w="40px" />
            <Text  pl="20px">Logout</Text>
          </HStack>
        </Box>
        <Box pl="20px" pt="20px">
          <HStack>
            <Image src="/assistance.png" h="40px" w="40px" />
            <Text  pl="20px">Assistance</Text>
          </HStack>
        </Box>
      </Grid>
      <Center pl="80px" pt="20px">
        <IconButton
          aria-label="Search database"
          icon={<ArrowRightIcon />}
          rounded="100px"
          bg="blue.500"
          boxShadow="inner"
                  />
      </Center>
    </Box>
  );
};

export default Navbar;
