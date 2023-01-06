import { Button, Center } from '@chakra-ui/react';

const Forge = () => {
  const addData = async () => {
    try {
      const res = await fetch('/api/forge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('The promise is rejected !', error);
    }
  };

  return (
    <Center>
      <Button colorScheme="teal" variant="solid" onClick={addData}>
        {'Add fake values in database'}
      </Button>
    </Center>
  );
};

export default Forge;
