import {
  Box,
  HStack,
  Heading,
  Center,
  Image,
  Text,
  Grid,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarRooms = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconsSize: string = '30px';
  const paddingBetweenIcons: string = '15px';
  const paddingLeftIcons: string = '15px';

  return (
    <Box>
      <Box
        boxShadow="inner"
        bg="blue.200"
        w="60px"
        h="100vh"
        position="fixed"
        top="0"
        right="0"
        overflow="scroll"
      >
        <Box bg="blue.500" h="80px" />
        <Grid>
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
        </Grid>
      </Box>
    </Box>
  );
};

export default NavbarRooms;
