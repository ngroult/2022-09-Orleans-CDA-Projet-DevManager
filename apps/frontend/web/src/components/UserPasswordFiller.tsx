import { Input, InputGroup, FormLabel } from '@chakra-ui/react';

const UserPasswordFiller = () => {
  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="2rem 0 1rem 0"
      px="1.5rem"
    >
      <FormLabel htmlFor="password" textAlign="left" w="100%" mt="0.5rem">
        {'Old password :'}
      </FormLabel>
      <Input
        id="password"
        maxW="400px"
        placeholder="Old password..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
      <FormLabel htmlFor="password" textAlign="left" w="100%" mt="0.5rem">
        {'New password :'}
      </FormLabel>
      <Input
        id="password"
        maxW="400px"
        placeholder="New password..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
    </InputGroup>
  );
};

export default UserPasswordFiller;
