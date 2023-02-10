import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  VStack,
  Button,
  useDisclosure,
  Text,
  IconButton,
  Grid,
  GridItem,
  Divider,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import ModalResources from './ModalResources';
import { GameCharacter, GameResource, GameRoom } from '@apps/backend-api';
import DrawerResources from './DrawerResources';
import { useParams } from 'react-router-dom';

const ResourcesBar = () => {
  const {
    isOpen: isOpenModalResources,
    onOpen: onOpenModalResources,
    onClose: onCloseModalResources,
  } = useDisclosure();
  const {
    isOpen: isOpenDrawerResources,
    onOpen: onOpenDrawerResources,
    onClose: onCloseDrawerResources,
  } = useDisclosure();

  const [resources, setResources] = useState<GameResource[]>([]);
  const [gameCharacters, setGameCharacters] = useState<GameCharacter[]>([]);
  const [gameRoom, setGameRoom] = useState<GameRoom>();

  const { label } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const handleRoom = async () => {
      try {
        const res = await fetch(`/api/game-rooms/by-label/${label}`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameRoom(jsonResponse);
      } catch {}
    };
    handleRoom();

    return () => {
      abortController.abort();
    };
  }, [label]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('/api/game-resources', {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => setResources(data));

    const handleCharacters = async () => {
      try {
        const res = await fetch(`/api/game-characters`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameCharacters(jsonResponse);
      } catch {}
    };
    handleCharacters();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Box
      position="absolute"
      top="0"
      py="7px"
      borderBottom={'1px solid grey'}
      borderBottomWidth={'90%'}
      width={'100%'}
    >
      <Flex minWidth="max-content" gap="2" pl="80px">
        <HStack display={{ base: 'none', md: 'flex' }}>
          <Box boxSize="40px">
            <Image src="/company4.png" placeholder="my_company" />
          </Box>
          <Box pl="12px" fontSize={'35'}>
            {'My Company Name'}
          </Box>
        </HStack>
        <Spacer display={{ base: 'none', md: 'flex' }} />
        {gameRoom && (
          <>
            <VStack display={{ base: 'none', md: 'flex' }} pr="2px">
              <Box>{'Remaining'}</Box>
              <HStack color={'red'}>
                <Box>{gameRoom.size}</Box>
                <Box boxSize="30px">
                  <Image src="/area.png" />
                </Box>
              </HStack>
            </VStack>
            <Divider orientation="vertical" borderColor="black" height="65px" />
            <VStack display={{ base: 'none', md: 'flex' }}>
              <Box>{'Total'}</Box>
              <HStack>
                <Box>{gameRoom.totalSize}</Box>
                <Box boxSize="30px">
                  <Image src="/area.png" />
                </Box>
              </HStack>
            </VStack>
          </>
        )}
        <Spacer display={{ base: 'none', md: 'flex' }} />
        <HStack>
          <Box>
            <HStack>
              <Grid
                templateColumns={{
                  base: 'repeat(3, 1fr)',
                  lg: 'repeat(5, 1fr)',
                }}
                gap={2}
              >
                {resources.map((resource) => (
                  <GridItem
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
                  </GridItem>
                ))}
              </Grid>
            </HStack>
          </Box>
          <Button
            display={{ base: 'none', md: 'flex' }}
            colorScheme="white"
            onClick={onOpenModalResources}
            pr="100px"
          >
            <Image src="/more.png" boxSize="30px" />
          </Button>
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            size="md"
            aria-label="Resources"
            icon={<ArrowDownIcon />}
            rounded="100px"
            bg="white"
            border="1px"
            borderColor="black"
            boxShadow="inner"
            onClick={onOpenDrawerResources}
          />
        </HStack>
      </Flex>
      <Flex minWidth="max-content" alignItems="center" gap="2" pl="80px">
        <HStack py="10px" display={{ base: 'flex', md: 'none', sm: 'flex' }}>
          <Box boxSize="30px">
            <Image src="/company4.png" placeholder="my_company" />
          </Box>
          <Box fontSize="xl">{'My Company'}</Box>
          <Spacer />
          <Box bgColor="gray.200" rounded="5px" p="5px">
            <HStack>
              <Box boxSize="30px">
                <Image src="/area.png" />
              </Box>
              <Text>{'50'}</Text>
            </HStack>
          </Box>
        </HStack>
      </Flex>
      <ModalResources
        isOpen={isOpenModalResources}
        onClose={onCloseModalResources}
        resources={resources}
      />
      <DrawerResources
        isOpen={isOpenDrawerResources}
        onClose={onCloseDrawerResources}
        resources={resources}
      />
    </Box>
  );
};

export default ResourcesBar;
