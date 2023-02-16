import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Center, IconButton, useDisclosure } from '@chakra-ui/react';
import DrawerNavbar from './popups/DrawerNavbar';

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        display={{ base: 'block', sm: 'none' }}
        w="3rem"
        h="3rem"
        position="absolute"
        zIndex="100"
        aria-label="Hamburger button"
        icon={<HamburgerIcon />}
        colorScheme="white"
        color="black"
        onClick={onOpen}
        size="lg"
      />
      <DrawerNavbar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default MobileNavbar;
