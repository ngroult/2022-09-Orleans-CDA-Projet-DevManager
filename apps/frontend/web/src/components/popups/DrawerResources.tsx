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
import {
  ArrowDownIcon,
  ArrowUpDownIcon,
  ArrowUpIcon,
  MinusIcon,
} from '@chakra-ui/icons';

function DrawerResources({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { gameResourcesChar, gameCharacters } = useContext(GameContext);

  return (
    <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton zIndex="11" />
        <DrawerHeader borderBottomWidth="1px" zIndex="10" bgColor="#fff">
          {'Resources'}
        </DrawerHeader>
        <DrawerBody
          display="flex"
          flexDir={{ base: 'column', sm: 'row' }}
          flexWrap={{ base: 'unset', sm: 'wrap' }}
          justifyContent={{ base: 'flex-start', sm: 'center' }}
          alignItems="center"
          zIndex="9"
        >
          {gameResourcesChar.map((gameResource) => {
            const used = gameResource.resource.resourcesUsed.reduce(
              (acc, resourceUsed) => {
                const character = gameCharacters.find(
                  (gc) => gc.character.id === resourceUsed.character.id
                );
                const quantity = character ? character.quantity : 0;
                return acc + resourceUsed.quantity * quantity;
              },
              0
            );

            const produced = gameResource.resource.resourcesProduced.reduce(
              (acc, resourceProduced) => {
                const character = gameCharacters.find(
                  (gc) => gc.character.id === resourceProduced.character.id
                );
                const quantity = character ? character.quantity : 0;
                return acc + resourceProduced.quantity * quantity;
              },
              0
            );
            const income = produced - used;

            return (
              <Flex
                my="3rem"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                border="1px solid black"
                borderRadius="0.5rem"
                m="1rem"
                p="1rem"
                key={gameResource.id}
              >
                <Box boxSize="60px">
                  <Image src={gameResource.resource.image} />
                </Box>
                <Text fontSize="20px" fontWeight="bold" mb="1rem">
                  {gameResource.resource.name}
                </Text>
                <HStack mb="0.5rem">
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
                      <Text>{income}</Text>
                      <Text>{'/min'}</Text>
                      <Icon
                        as={
                          income > 0
                            ? ArrowUpIcon
                            : income < 0
                            ? ArrowDownIcon
                            : MinusIcon
                        }
                        color={
                          income > 0
                            ? 'green.900'
                            : income < 0
                            ? 'red.900'
                            : 'blue.900'
                        }
                        boxSize={income > 0 ? 6 : income < 0 ? 6 : 4}
                      />
                    </HStack>
                  </Box>
                </HStack>
                <HStack mb="0.5rem">
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
                        m="0.25rem"
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
                      m="0.25rem"
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
            );
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerResources;
