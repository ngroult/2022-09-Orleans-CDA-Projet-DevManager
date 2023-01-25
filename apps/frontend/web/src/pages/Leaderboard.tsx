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
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Game } from '@apps/backend-api';
import Navbar from '../components/Navbar';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<Game[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('/api/games', { method: 'GET', signal: abortController.signal })
      .then((data) => data.json())
      .then((data) => {
        setLeaderboard(data);
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
                <Box ml="8">
                  <Heading as="h2" size="l">
                    <Flex>
                      <Image src="/badge.png" boxSize="5" mr="2" alt="Badge" />
                      {'Your rank'}
                    </Flex>
                  </Heading>
                  <p>{'2500 / 1 500 000'}</p>
                  <p>{'$ 1 030 spent'}</p>
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
                    <Th>{'Ceo Name'}</Th>
                    <Th>{'Company'}</Th>
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
                      <Td>{leaderboard.ceo}</Td>
                      <Td>{leaderboard.companyName}</Td>
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
