import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Game, GameResource } from '@apps/backend-api';
import Navbar from '../components/Navbar';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<Game[]>([]);
  const [gameResource, setGameResource] = useState<GameResource[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('/api/games', { method: 'GET', signal: abortController.signal })
      .then((data) => data.json())
      .then((data) => {
        setLeaderboard(data);
      });
    fetch('/api/game-resources', { method: 'GET' })
      .then((response) => response.json())
      .then((response) => {
        setGameResource(response);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Box position="absolute" top="0" margin="auto" w="100%" zIndex="-1">
        <Center>
          <Heading as="h1" size="2xl" m="20" color="#797AA6">
            {'Leaderboard'}
          </Heading>
        </Center>
        <Center>
          <Box>
            <Flex>
              <Box ml="20" boxSize="20%">
                <Image src="/company8.png" alt="Your company image" />
              </Box>
              <Flex>
                <Box ml={{ base: '10', md: '40' }}>
                  <Heading
                    as="h2"
                    size={{ base: 'l', md: 'xl' }}
                    mb={{ base: '5', md: '10' }}
                  >
                    <Flex>
                      <Image src="/badge.png" boxSize="10" mr="2" alt="Badge" />
                      {'Your rank'}
                    </Flex>
                  </Heading>
                  <Text fontSize={{ base: 'l', md: 'xl' }}>
                    {'2500 / 1 500 000'}
                  </Text>
                  <Text fontSize={{ base: 'l', md: 'xl' }}>
                    {'$ 1 030 spent'}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Center>
        <Center>
          <Divider mt="5" w="60"></Divider>
        </Center>
        <Center>
          <Heading as="h2" size="l" mt="10">
            {'World ranking'}
          </Heading>
        </Center>
        <TableContainer>
          <Center>
            <Box w={{ base: '100%', lg: '80%', md: '80%', sm: '80%' }}>
              <Table variant="striped" size="sm">
                <Thead>
                  <Tr>
                    <Th>{'N°'}</Th>
                    <Th>{'Player'}</Th>
                    <Th>{'Company'}</Th>
                    <Th>{'Point'}</Th>
                  </Tr>
                </Thead>
                {leaderboard.map((leaderboard) => (
                  <Tbody key={leaderboard.id}>
                    <Tr>
                      <Td>
                        {leaderboard.id === 1 ? (
                          <Image
                            src="/medal_gold.png"
                            boxSize="7"
                            alt="Medal gold"
                          />
                        ) : leaderboard.id === 2 ? (
                          <Image
                            src="/medal_silver.png"
                            boxSize="7"
                            alt="Medal silver"
                          />
                        ) : leaderboard.id === 3 ? (
                          <Image
                            src="/medal_bronze.png"
                            boxSize="7"
                            alt="Medal bronze"
                          />
                        ) : (
                          `${leaderboard.id}`
                        )}
                      </Td>
                      <Td>{leaderboard.user.username}</Td>
                      <Td>{leaderboard.companyName}</Td>
                      <Td>{`$${gameResource[0].quantity}`}</Td>
                    </Tr>
                  </Tbody>
                ))}
              </Table>
            </Box>
          </Center>
        </TableContainer>
      </Box>
    </>
  );
};

export default Leaderboard;
