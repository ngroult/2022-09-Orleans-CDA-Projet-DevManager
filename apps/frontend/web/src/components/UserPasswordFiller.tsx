import { User } from '@apps/backend-api';
import { Input, InputGroup, FormLabel } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

const UserPasswordFiller = ({
  setPendingUserData,
}: {
  setPendingUserData: Dispatch<SetStateAction<Partial<User>>>;
}) => {
  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="2rem 0 1rem 0"
      px="1.5rem"
    >
      <FormLabel
        htmlFor="password"
        textAlign="left"
        w="100%"
        maxW="400px"
        m="0"
      >
        {'Old password:'}
      </FormLabel>
      <Input
        id="password"
        maxW="400px"
        placeholder="Old password..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
      <FormLabel
        htmlFor="password"
        textAlign="left"
        w="100%"
        maxW="400px"
        m="0.5rem 0 0"
      >
        {'New password:'}
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
