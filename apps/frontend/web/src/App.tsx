import { useEffect, useState } from 'react';
import './App.css';
import theme from "./utils/theme";
import { SomeInterface, User } from '@libs/typings';
import { Box, Heading } from '@chakra-ui/react';

function App() {
  const [someData, setSomeData] = useState<SomeInterface>({
    someProperty: 'someValue',
  });

  const user: Partial<User> = {};

  useEffect(() => {
    const abortController = new AbortController();
    const go = async () => {
      const response = await fetch(`/api/some-route`, {
        signal: abortController.signal,
      });
      const data = await response.json();
      setSomeData(data);
    };

    go();

    return () => {
      abortController.abort();
    };
  }, []);

  return <div className="App"><div>{`${someData.someProperty}`}</div>
    <Heading>DevManager</Heading>
    <Box bg="turquoise.200">Turquoise 200</Box>
    <Box bg="turquoise.300">Turquoise 300</Box>
    <Box bg="turquoise.500">Turquoise 500</Box>
    <Box bg="turquoise.900">Turquoise 900</Box>

    <Box bg="blue.200">Blue 200</Box>
    <Box bg="blue.500">Blue 500</Box>
    <Box bg="blue.900">Blue 900</Box>

    <Box bg="purple.200">Purple 200</Box>
    <Box bg="purple.300">Purple 300</Box>
    <Box bg="purple.500">Purple 500</Box>
    <Box bg="purple.900">Purple 900</Box>

    <Box bg="pink.200">Pink 200</Box>
    <Box bg="pink.500">Pink 500</Box>
    <Box bg="pink.900">Pink 900</Box>

    <Box bg="gold.200">Gold 200</Box>
    <Box bg="gold.300">Gold 300</Box>
    <Box bg="gold.500">Gold 500</Box>
    <Box bg="gold.900">Gold 900</Box>

  </div>;
}

export default App;
