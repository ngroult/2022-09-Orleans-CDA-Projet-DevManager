import { Input, InputGroup, FormLabel } from '@chakra-ui/react';

const UserContactFiller = () => {
  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="2rem 0 1rem 0"
      p="0 1.5rem"
    >
      <FormLabel htmlFor="username" textAlign="left" w="100%" m="0">
        {'Username :'}
      </FormLabel>
      <Input
        id="username"
        maxW="400px"
        placeholder="Username..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
      <FormLabel htmlFor="email" textAlign="left" w="100%" m="0.5rem 0 0 0">
        {'E-mail :'}
      </FormLabel>
      <Input
        id="email"
        maxW="400px"
        placeholder="E-mail..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
    </InputGroup>
  );
};

export default UserContactFiller;
