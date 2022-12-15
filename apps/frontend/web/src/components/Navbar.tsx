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
const Navbar = () => {
  const iconsSize: string = '30px';
  const paddingBetweendIcons: string = '15px';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box  w={`${isOpen ? '220px' : '60px'}`}>
    <Box
      boxShadow="inner"
      bg="blue.200"
      w={`${isOpen ? '220px' : '60px'}`}
      h="calc(100vh)"
      position="absolute"
      top="0"
      left="0"
      overflow="scroll"
    >
      
      <Box bg="blue.500" w={`${isOpen ? '220px' : '60px'}`} h="80px">
        {isOpen && (
          <Heading fontSize="xl" pt="25px">
            DevManager
          </Heading>
        )}
      </Box>
      <Grid>
        <Box pl={paddingBetweendIcons} pt={paddingBetweendIcons}>
          <HStack>
            <Image
              src="/resume_game.png"
              h={iconsSize}
              w={iconsSize}
              filter="grayscale(80%)"
            />
            {isOpen && <Text pl={paddingBetweendIcons}>Resume Game</Text>}
          </HStack>
        </Box>
        <Box pl={paddingBetweendIcons} pt={paddingBetweendIcons}>
          <HStack>
            <Image src="/leaderboard.png" h={iconsSize} w={iconsSize} />
            {isOpen && <Text pl={paddingBetweendIcons}>Leaderboard</Text>}
          </HStack>
        </Box>
        <Box pl={paddingBetweendIcons} pt={paddingBetweendIcons}>
          <HStack>
            <Image src="/game_settings.png" h={iconsSize} w={iconsSize} />
            {isOpen && <Text pl={paddingBetweendIcons}>Game Settings</Text>}
          </HStack>
        </Box>
        <Box pl={paddingBetweendIcons} pt={paddingBetweendIcons}>
          <HStack>
            <Image src="/account_settings.png" h={iconsSize} w={iconsSize} />
            {isOpen && <Text pl={paddingBetweendIcons}>Account Settings</Text>}
          </HStack>
        </Box>
        <Box pl={paddingBetweendIcons} pt={paddingBetweendIcons}>
          <HStack>
            <Image src="/about.png" h={iconsSize} w={iconsSize} />
            {isOpen && <Text pl={paddingBetweendIcons}>About</Text>}
          </HStack>
        </Box>
        <Box pl={paddingBetweendIcons} pt={paddingBetweendIcons}>
          <HStack>
            <Image src="/logout.png" h={iconsSize} w={iconsSize} />
            {isOpen && <Text pl={paddingBetweendIcons}>Logout</Text>}
          </HStack>
        </Box>
        <Box pl={paddingBetweendIcons} pt={paddingBetweendIcons}>
          <HStack>
            <Image src="/assistance.png" h={iconsSize} w={iconsSize} />
            {isOpen && <Text pl={paddingBetweendIcons}>Assistance</Text>}
          </HStack>
        </Box>
      </Grid>
      
    </Box>
    <Center pl={`${isOpen ? '220px' : '60px'}`} pt="calc(50vh)" >
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
