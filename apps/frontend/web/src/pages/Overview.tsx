import { Button, Box, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Overview = () => {
  const [showGetCheck, setShowGetCheck] = useState(true);

  const handleGetCheck = async () => {
    const data = {
      idGame: 1,
      idResource: 1,
      quantity: 1000,
    };

    try {
      const response = await fetch('/api/game-resources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowGetCheck(false);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Text fontSize="xl">{'Overview'}</Text>
      {showGetCheck && (
        <>
          <Text maxW="500px" textAlign="center" m="1rem 0">
            {
              'Cheer! You have just launched your digital services business! The mayor of the city offers you $1,000 aid to set up in his municipality. Accept the money and start the adventure!'
            }
          </Text>
          <Button colorScheme="teal" size="lg" onClick={handleGetCheck}>
            {'Take the check'}
            <br />
            {'$1000'}
          </Button>
        </>
      )}
      <Image src="/overview.jpg" />
    </Box>
  );
};

export default Overview;
