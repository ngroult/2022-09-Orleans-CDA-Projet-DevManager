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
  resources,
}: {
  isOpen: boolean;
  onClose: () => void;
  resources: GameResource[];
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
              {resources.map((resource) => (
                <WrapItem key={resource.id}>
                  <Box px="10px" py="5px">
                    <Flex>
                      <VStack>
                        <Box boxSize="60px">
                          <Image src={resource.resource.image} />
                        </Box>
                        <Text fontSize="20px" fontWeight="bold">
                          {resource.resource.name}
                        </Text>
                        <HStack>
                          <Text>{'Production:'}</Text>
                          <Box
                            rounded="10px"
                            bgColor={resource.resource.color}
                            px="10px"
                            py="5px"
                            borderRadius="20px"
                            boxShadow="xl"
                          >
                            <HStack>
                              <Box boxSize="25px">
                                <Image src={resource.resource.image} />
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
                            bgColor={resource.resource.color}
                            px="10px"
                            py="5px"
                            borderRadius="20px"
                            boxShadow="xl"
                          >
                            <HStack>
                              <Box boxSize="25px">
                                <Image src={resource.resource.image} />
                              </Box>
                              <Text>{resource.quantity}</Text>
                            </HStack>
                          </Box>
                        </HStack>
                        <Text>{'Produced and used by:'}</Text>
                        <Box>
                          <HStack>
                            <Box rounded="5px" bgColor="green.900" px="10px">
                              <HStack>
                                <Box boxSize="30px">
                                  <Image />
                                </Box>
                                <Text>{'Name dev'}</Text>
                              </HStack>
                            </Box>
                            <Box rounded="5px" bgColor="red.900" px="10px">
                              <HStack>
                                <Box boxSize="30px">
                                  <Image />
                                </Box>
                                <Text>{'Name dev'}</Text>
                              </HStack>
                            </Box>
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
