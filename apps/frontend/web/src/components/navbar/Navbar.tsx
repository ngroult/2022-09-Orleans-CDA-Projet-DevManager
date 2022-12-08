import React from 'react';
import { Box, VStack, Heading, Center, Image, Spacer, Flex } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box
      boxShadow="inner"
      bg="blue.200"
      w="80px"
      h="1080px"
      position="absolute"
      top="0"
      left="0"
    >
        <Flex>
      <VStack>
        <Box bg="blue.500" w="80px" h="80px">
          <Center>
            <Heading>D</Heading>
          </Center>
        </Box>
        <Spacer />
        <Image
          src="/resume_game.png"
          h="40px"
          w="40px"
          filter="grayscale(80%)"
        />
        <Image src="/leaderboard.png" h="40px" w="40px" />
        <Image src="/game_settings.png" h="40px" w="40px" />
        <Image src="/account_settings.png" h="40px" w="40px" />
        <Image src="/about.png" h="40px" w="40px" />
        <Image src="/logout.png" h="40px" w="40px" />
        <Image src="/assistance.png" h="40px" w="40px" />
      </VStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
