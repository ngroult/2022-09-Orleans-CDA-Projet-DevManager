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
import { useState, useEffect, useContext } from 'react';
import { GameResource } from '@apps/backend-api';
import Navbar from '../components/Navbar';
import AuthContext from '../contexts/AuthContext';
import { DeepPartial } from '@libs/typings';

const Leaderboard = () => {
  const { user } = useContext(AuthContext);

  const [gamesResources, setGamesResources] = useState<
    DeepPartial<GameResource[]>
  >([]);
  const [userGameResources, setUserGameResources] =
    useState<DeepPartial<GameResource>>();

  useEffect(() => {
    const abortController = new AbortController();

    fetch('/api/game-resources/all', {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => {
        setGamesResources(data);
      });
    fetch(`/api/game-resources/details/${user?.id}`, {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => {
        setUserGameResources(data);
      });
    return () => {
      abortController.abort();
    };
  }, [user]);

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
                      {user?.username}
                      <Image
                        src={`${userGameResources?.game?.user?.image?.name}.png`}
                        boxSize="10"
                        mr="2"
                        alt="profil picture"
                      />
                    </Flex>
                  </Heading>
                  <Text fontSize={{ base: 'l', md: 'xl' }}>
                    {'2500 / 1 500 000'}
                  </Text>
                  <Text fontSize={{ base: 'l', md: 'xl' }}>
                    {userGameResources?.quantity}$$
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
          <Heading as="h2" size="l" pt="10" pb="10">
            {'World ranking'}
          </Heading>
        </Center>
        <TableContainer pb="10">
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
                {gamesResources?.map(
                  (gameResources: DeepPartial<GameResource>, index: number) => (
                    <Tbody key={gameResources.id}>
                      <Tr>
                        <Td>
                          {index === 0 ? (
                            <Image
                              src="/medal_gold.png"
                              boxSize="7"
                              alt="gold Medal "
                            />
                          ) : index === 1 ? (
                            <Image
                              src="/medal_silver.png"
                              boxSize="7"
                              alt="silver Medal "
                            />
                          ) : index === 2 ? (
                            <Image
                              src="/medal_bronze.png"
                              boxSize="7"
                              alt="bronze Medal "
                            />
                          ) : (
                            index + 1
                          )}
                        </Td>
                        <Td>
                          <Flex align={'center'}>
                            {gameResources?.game?.user?.username}
                            <Image
                              src={`${gameResources?.game?.user?.image?.name}.png`}
                              alt="Profile picture"
                              w="8%"
                              ml={'2rem'}
                            />
                          </Flex>
                        </Td>
                        <Td>
                          <Flex align={'center'}>
                            {gameResources?.game?.companyName}
                            <Image
                              src={`${gameResources?.game?.image?.name}.png`}
                              alt="game picture"
                              w="8%"
                              ml={'2rem'}
                            />
                          </Flex>
                        </Td>

                        <Td>{`${gameResources.quantity}$$`}</Td>
                      </Tr>
                    </Tbody>
                  )
                )}
              </Table>
            </Box>
          </Center>
        </TableContainer>
      </Box>
    </>
  );
};

export default Leaderboard;
