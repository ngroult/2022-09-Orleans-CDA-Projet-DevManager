import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  VStack,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ModalResources from './ModalResources';
import { GameResource } from '@apps/backend-api';

const ResourcesBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [resources, setResources] = useState<GameResource[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('/api/game-resources', {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => {
        setResources(data);
      });
    console.log(resources);
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2" px="80px">
        <HStack>
          <Box boxSize="30px">
            <Image src="/company4.png" placeholder="my_company" />
          </Box>
          <Box>{'My Company'}</Box>
        </HStack>
        <Spacer />
        <VStack>
          <Box>{'Remaining'}</Box>
          <HStack>
            <Box>{'50'}</Box>
            <Box boxSize="30px">
              <Image src="/area.png" />
            </Box>
          </HStack>
        </VStack>
        <VStack>
          <Box>{'Total'}</Box>
          <HStack>
            <Box>{'110'}</Box>
            <Box boxSize="30px">
              <Image src="/area.png" />
            </Box>
          </HStack>
        </VStack>

        <Spacer />
        <HStack>
          {resources.map((resource) => (
            <Box
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
            </Box>
          ))}

          <Button colorScheme="white" onClick={onOpen}>
            <Image src="/more.png" boxSize="30px" />
          </Button>
        </HStack>
      </Flex>
      <ModalResources isOpen={isOpen} onClose={onClose} resources={resources} />
    </>
  );
};

export default ResourcesBar;
