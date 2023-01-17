import { InputGroup, Input, FormLabel } from '@chakra-ui/react';

const DeleteAccountFiller = () => {
  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="2rem 0 1rem 0"
      p="0 1.5rem"
    >
      <FormLabel htmlFor="email" textAlign="left" w="100%" mt="0.5rem">
        {'Password :'}
      </FormLabel>
      <Input
        id="email"
        maxW="400px"
        placeholder="Password..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
    </InputGroup>
  );
};

export default DeleteAccountFiller;
