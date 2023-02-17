import { User } from '@apps/backend-api';
import { Dispatch, SetStateAction } from 'react';
import { Input, InputGroup, FormLabel } from '@chakra-ui/react';

const UserContactFiller = ({
  pendingUserData,
  setPendingUserData,
}: {
  pendingUserData: Partial<User>;
  setPendingUserData: Dispatch<SetStateAction<Partial<User>>>;
}) => {
  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="2rem 0 1rem 0"
      p="0 1.5rem"
    >
      <FormLabel
        htmlFor="username"
        textAlign="left"
        w="100%"
        maxW="400px"
        m="0"
      >
        {'Username:'}
      </FormLabel>
      <Input
        id="username"
        maxW="400px"
        placeholder="Username..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
        value={pendingUserData.username}
        onChange={(e) =>
          setPendingUserData((prev: Partial<User>) => ({
            ...prev,
            username: e.target.value,
          }))
        }
      />
      <FormLabel
        htmlFor="email"
        textAlign="left"
        w="100%"
        maxW="400px"
        m="0.5rem 0 0"
      >
        {'E-mail:'}
      </FormLabel>
      <Input
        id="email"
        maxW="400px"
        placeholder="E-mail..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
        value={pendingUserData.email}
        onChange={(e) =>
          setPendingUserData((prev: Partial<User>) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />
    </InputGroup>
  );
};

export default UserContactFiller;
