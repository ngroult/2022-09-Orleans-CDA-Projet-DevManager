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
  Flex,
  Text,
  Icon,
} from '@chakra-ui/react';
import GameContext from '../../contexts/GameContext';
import { useContext } from 'react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';

function DrawerResources({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { gameResourcesChar } = useContext(GameContext);

  return (
    <>
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex="11" />
          <DrawerHeader borderBottomWidth="1px" zIndex="10" bgColor="#fff">
            {'Resources'}
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDir="column"
            justifyContent="flex-start"
            alignItems="center"
            mt="-2rem"
            zIndex="9"
          >
            {gameResourcesChar.map((gameResource) => (
              <Flex
                my="3rem"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                key={gameResource.id}
              >
                <Box boxSize="60px">
                  <Image src={gameResource.resource.image} />
                </Box>
                <Text fontSize="20px" fontWeight="bold">
                  {gameResource.resource.name}
                </Text>
                <HStack>
                  <Text>{'Production:'}</Text>
                  <Box
                    rounded="10px"
                    bgColor={gameResource.resource.color}
                    px="10px"
                    py="5px"
                    borderRadius="20px"
                    boxShadow="xl"
                  >
                    <HStack>
                      <Box boxSize="25px">
                        <Image src={gameResource.resource.image} />
                      </Box>
                      <Text>{'11111'}</Text>
                      <Text>{'/min'}</Text>
                      <Icon
                        as={ArrowUpDownIcon}
                        color="green.900"
                        boxSize={6}
                      />
                    </HStack>
                  </Box>
                </HStack>
                <HStack>
                  <Text>{'Total:'}</Text>
                  <Box
                    rounded="10px"
                    bgColor={gameResource.resource.color}
                    px="10px"
                    py="5px"
                    borderRadius="20px"
                    boxShadow="xl"
                  >
                    <HStack>
                      <Box boxSize="25px">
                        <Image src={gameResource.resource.image} />
                      </Box>
                      <Text>{gameResource.quantity}</Text>
                    </HStack>
                  </Box>
                </HStack>
                <Text>{'Produced and used by:'}</Text>
                <Flex
                  flexDir="row"
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                >
                  {gameResource.resource.resourcesProduced.map(
                    (resourceProduced) => (
                      <Box
                        rounded="5px"
                        bgColor="green.900"
                        px="10px"
                        key={resourceProduced.character.id}
                      >
                        <Flex
                          flexDir="row"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Image
                            w="2rem"
                            h="2rem"
                            src={resourceProduced.character.image}
                            alt={resourceProduced.character.name}
                          />
                          <Text>{resourceProduced.character.name}</Text>
                        </Flex>
                      </Box>
                    )
                  )}
                  {gameResource.resource.resourcesUsed.map((resourceUsed) => (
                    <Box
                      rounded="5px"
                      bgColor="red.900"
                      px="10px"
                      key={resourceUsed.character.id}
                    >
                      <Flex
                        flexDir="row"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          w="2rem"
                          h="2rem"
                          src={resourceUsed.character.image}
                          alt={resourceUsed.character.name}
                        />
                        <Text>{resourceUsed.character.name}</Text>
                      </Flex>
                    </Box>
                  ))}
                </Flex>
              </Flex>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerResources;
