import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  HStack,
  VStack,
  Image,
  Wrap,
  WrapItem,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { GameResource } from '@apps/backend-api';
import { ArrowUpIcon } from '@chakra-ui/icons';

function ModalResources({
  isOpen,
  onClose,
  gameResources,
}: {
  isOpen: boolean;
  onClose: () => void;
  gameResources: GameResource[];
}) {
  return (
    <>
      <Modal onClose={onClose} size="5xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{'Resources'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Wrap justifyContent="space-between">
              {gameResources.map((gameResource) => (
                <WrapItem key={gameResource.id}>
                  <Box px="10px" py="5px">
                    <Flex>
                      <VStack>
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
                                as={ArrowUpIcon}
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
                        <Box>
                          <HStack>
                            {gameResource.resource.resourcesProduced.map(
                              (resourceProduced) => (
                                <Box
                                  rounded="5px"
                                  bgColor="green.900"
                                  px="10px"
                                  key={resourceProduced.id}
                                >
                                  <HStack>
                                    <Box boxSize="30px">
                                      <Image
                                        src={resourceProduced.character.image}
                                        alt={resourceProduced.character.name}
                                      />
                                    </Box>
                                    <Text>
                                      {resourceProduced.character.name}
                                    </Text>
                                  </HStack>
                                </Box>
                              )
                            )}
                            ;
                            {gameResource.resource.resourcesUsed.map(
                              (resourceUsed) => (
                                <Box
                                  rounded="5px"
                                  bgColor="red.900"
                                  px="10px"
                                  key={resourceUsed.id}
                                >
                                  <HStack>
                                    <Box boxSize="30px">
                                      <Image
                                        src={resourceUsed.character.image}
                                        alt={resourceUsed.character.name}
                                      />
                                    </Box>
                                    <Text>{resourceUsed.character.name}</Text>
                                  </HStack>
                                </Box>
                              )
                            )}
                            ;
                          </HStack>
                        </Box>
                      </VStack>
                    </Flex>
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalResources;
