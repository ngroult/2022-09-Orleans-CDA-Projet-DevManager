import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  Box,
  Image,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import GameContext from '../../contexts/GameContext';
import { useContext } from 'react';

function DrawerResources({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { gameResources } = useContext(GameContext);

  return (
    <>
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">{'Resources'}</DrawerHeader>
          <DrawerBody>
            <Wrap justifyContent="space-between">
              {gameResources.map((gameResource) => (
                <WrapItem
                  display={{}}
                  key={gameResource.id}
                  bg={gameResource.resource.color}
                  px="10px"
                  py="5px"
                  borderRadius="20px"
                  boxShadow="xl"
                >
                  <HStack>
                    <Box boxSize="30px">
                      <Image src={gameResource.resource.image} />
                    </Box>
                    <Box> {gameResource.quantity}</Box>
                  </HStack>
                </WrapItem>
              ))}
            </Wrap>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerResources;
