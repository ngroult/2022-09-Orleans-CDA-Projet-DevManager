import {
  Box,
  HStack,
  Heading,
  Center,
  Image,
  Text,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarRooms = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconsSize: string = '30px';
  const paddingBetweenIcons: string = '15px';
  const paddingLeftIcons: string = '15px';

  return (
    <>
      <Box
        boxShadow="inner"
        bg="blue.200"
        w={{ base: '100%', sm: '60px' }}
        h={{ base: '60px', sm: '100vh' }}
        position="absolute"
        top={{ sm: '0' }}
        bottom={{ base: '0', sm: 'initial' }}
        right={{ sm: '0' }}
        left={{ base: '0', sm: 'initial' }}
        overflow="scroll"
      >
        <Box bg="blue.500" h={{ base: '0px', sm: '80px' }} />
        <Flex
          flexDir={{ base: 'row', sm: 'column' }}
          justifyContent="space-around"
        >
          <Box pl={paddingLeftIcons} pt={paddingBetweenIcons}>
            <Link to="/game/:room">
              <HStack>
                <Image src="/overview.png" h={iconsSize} w={iconsSize} />
              </HStack>
            </Link>
          </Box>
          <Box pl={paddingLeftIcons} pt={paddingBetweenIcons}>
            <Link to="/game/overview">
              <HStack>
                <Image src="/open_space.png" h={iconsSize} w={iconsSize} />
              </HStack>
            </Link>
          </Box>
          <Box pl={paddingLeftIcons} pt={paddingBetweenIcons}>
            <Link to="/game/overview">
              <HStack>
                <Image src="/offices.png" h={iconsSize} w={iconsSize} />
              </HStack>
            </Link>
          </Box>
          <Box pl={paddingLeftIcons} pt={paddingBetweenIcons}>
            <Link to="/game/overview">
              <HStack>
                <Image src="/break_room.png" h={iconsSize} w={iconsSize} />
              </HStack>
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NavbarRooms;
