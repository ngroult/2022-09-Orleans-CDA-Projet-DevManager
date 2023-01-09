import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    Text,
    useDisclosure,
  } from '@chakra-ui/react';
  
  function CharacterModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box>
        <Button onClick={onOpen}>{'Open Modal'}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
          <ModalContent bg={'purple.200'}>
            <ModalCloseButton />
            <ModalBody pt={'10'} px={'0'}>
              <Box h={'calc(100vh-7rem)'}>
                <Center>
                  <Image
                    boxSize="35%"
                    m="auto"
                    mt="2.5"
                    src="/lead_dev.png"
                    alt="lead developer"
                  />
                </Center>
                <Center>
                  <Heading size="md" py={'10'}>
                    {'Lead Developer'}
                  </Heading>
                </Center>
                <Text textAlign={'center'}>
                  {
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis maxime fugiat pariatur aliquid, ut ratione neque? Quamlaudantium ipsa velit, placeat reiciendis rerum, totam quo dictaexpedita itaque ea eius?'
                  }
                </Text>
                <Center>
                  <Flex py={'10'}>
                    <Text mr={'3'} fontWeight={'extrabold'}>
                      {'Current price :'}
                    </Text>
                    <Badge
                      fontSize="xl"
                      borderRadius="full"
                      px="2"
                      colorScheme="yellow"
                      marginEnd="5"
                    >
                      <Flex align="center">
                        <Image
                          src="/dollar.png"
                          alt="dollar"
                          boxSize="30px"
                          p="1"
                        />
                        {'$100'}
                      </Flex>
                    </Badge>
                    <Text fontWeight={'extrabold'}>{'/ unit'}</Text>
                  </Flex>
                </Center>
                <Center>
                  <Text fontWeight={'extrabold'}>
                    {'Ressource produced and used:'}
                  </Text>
                </Center>
                <Center>
                  <Box pt={'8'}>
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      <Flex align="center">
                        <Image
                          src="/coffee.png"
                          alt="coffee"
                          boxSize="30px"
                          p="1"
                        />
                        <Text>{'Coffee'}</Text>
                      </Flex>
                    </Badge>
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      <Flex align="center">
                        <Image
                          src="/coffee.png"
                          alt="coffee"
                          boxSize="30px"
                          p="1"
                        />
                        <Text>{'Coffee'}</Text>
                      </Flex>
                    </Badge>
                    <Badge borderRadius="full" px="2" colorScheme="red">
                      <Flex align="center">
                        <Image
                          src="/coffee.png"
                          alt="coffee"
                          boxSize="30px"
                          p="1"
                        />
                        <Text>{'Coffee'}</Text>
                      </Flex>
                    </Badge>
                  </Box>
                </Center>
              </Box>
              <Box pos={'absolute'} bottom={'0'} w={'100%'}>
                <Box h={'4rem'} bg={'blue'}></Box>
                <Box h={'2rem'} bg={'green'}></Box>
                <Box h={'1rem'} bg={'pink'}></Box>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }
  
  export default CharacterModal;
  