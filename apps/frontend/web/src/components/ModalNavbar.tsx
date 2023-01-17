import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  HStack,
  Image,
  Text,
  Heading,
  Grid,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ModalNavbar({
  isOpen,
  onClose,
  btnRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
}) {
  const iconsSize: string = '30px';
  const paddingBetweenIcons: string = '15px';
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        size="full"
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="blue.500">
            <Heading fontSize="xl">{'DevManager'}</Heading>
          </DrawerHeader>

          <DrawerBody bg="blue.200">
            <Grid>
              <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
                <Link to="/game/overview" onClick={() => setIsNavOpen(false)}>
                  <HStack>
                    <Image src="/resume_game.png" h={iconsSize} w={iconsSize} />
                    <Text pl={paddingBetweenIcons}>{'Resume Game'}</Text>
                  </HStack>
                </Link>
              </Box>
              <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
                <Link to="/leaderboard">
                  <HStack>
                    <Image src="/leaderboard.png" h={iconsSize} w={iconsSize} />
                    <Text pl={paddingBetweenIcons}>{'Leaderboard'}</Text>
                  </HStack>
                </Link>
              </Box>
              <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
                <Link to="/game-settings">
                  <HStack>
                    <Image
                      src="/game_settings.png"
                      h={iconsSize}
                      w={iconsSize}
                    />
                    <Text pl={paddingBetweenIcons}>{'Game Settings'}</Text>
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
                    <Text pl={paddingBetweenIcons}>{'Account Settings'}</Text>
                  </HStack>
                </Link>
              </Box>
              <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
                <Link to="/about">
                  <HStack>
                    <Image src="/about.png" h={iconsSize} w={iconsSize} />
                    <Text pl={paddingBetweenIcons}>{'About'}</Text>
                  </HStack>
                </Link>
              </Box>
              <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
                <Link to="/">
                  <HStack>
                    <Image src="/logout.png" h={iconsSize} w={iconsSize} />
                    <Text pl={paddingBetweenIcons}>{'Logout'}</Text>
                  </HStack>
                </Link>
              </Box>
              <Box pl={paddingBetweenIcons} pt={paddingBetweenIcons}>
                <Link to="/assistance">
                  <HStack>
                    <Image src="/assistance.png" h={iconsSize} w={iconsSize} />
                    <Text pl={paddingBetweenIcons}>{'Assistance'}</Text>
                  </HStack>
                </Link>
              </Box>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ModalNavbar;
