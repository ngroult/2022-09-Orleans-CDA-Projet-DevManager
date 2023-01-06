import { Button, Center } from '@chakra-ui/react';

const Forge = () => {
  const addData = async () => {
    await fetch('/api/forge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      console.log('it worked');
    });
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
