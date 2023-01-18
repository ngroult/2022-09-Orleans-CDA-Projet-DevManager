import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  Button,
  useDisclosure,
  Box,
  Image,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { GameResource } from '@apps/backend-api';

function DrawerResources({
  isOpen,
  onClose,
  resources,
}: {
  isOpen: boolean;
  onClose: () => void;
  resources: GameResource[];
}) {
  return (
    <>
      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">{'Resources'}</DrawerHeader>
          <DrawerBody>
            <Wrap justifyContent="space-between">
              {resources.map((resource) => (
                <WrapItem
                  display={{}}
                  key={resource.id}
                  bg={resource.resource.color}
                  px="10px"
                  py="5px"
                  borderRadius="20px"
                  boxShadow="xl"
                >
                  <HStack>
                    <Box boxSize="30px">
                      <Image src={resource.resource.image} />
                    </Box>
                    <Box> {resource.quantity}</Box>
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
