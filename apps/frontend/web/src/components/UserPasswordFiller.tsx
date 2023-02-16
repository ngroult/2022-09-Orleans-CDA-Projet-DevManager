import { User } from '@apps/backend-api';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  FormLabel,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from 'react';

const UserPasswordFiller = ({
  setPendingUserData,
}: {
  setPendingUserData: Dispatch<SetStateAction<Partial<User>>>;
}) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

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
        {'Old password :'}
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
        {'New password :'}
      </FormLabel>
      <InputGroup size="md" maxW="400px">
        <Input
          type={isVisiblePassword ? 'text' : 'password'}
          id="password"
          maxW="400px"
          placeholder="New password..."
          bgColor="#fff"
          _placeholder={{ opacity: 0.3 }}
          onChange={(e) =>
            setPendingUserData((prev: Partial<User>) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            me="2"
            onClick={() => setIsVisiblePassword(!isVisiblePassword)}
          >
            {isVisiblePassword ? (
              <div>
                {'Hide'} <ViewOffIcon ms="0.5" />
              </div>
            ) : (
              <div>
                {'Show'} <ViewIcon ms="0.5" />
              </div>
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
    </InputGroup>
  );
};

export default UserPasswordFiller;
