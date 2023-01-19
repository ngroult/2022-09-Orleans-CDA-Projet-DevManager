import { ArrowRightIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const location = useLocation();

  const [error, setError] = useState('');

  const isError = error !== '';

  const handleSubmit = async () => {
    try {
      const loginResponse = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const jsonResponse = await loginResponse.json();

      if (jsonResponse.status === 'KO') {
        setError('Username and / or password incorrect');
      }
      if (jsonResponse.status === 'OK') {
        setUser(jsonResponse.data);
        if (location.state?.redirectTo) {
          navigate(location.state.redirectTo);
        } else {
          navigate('/game/overview');
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box>
      <Center>
        <VStack h="20vh" justify="center">
          <Heading fontSize="3xl">{'DevManager'}</Heading>
          <Text color="#797AA6" fontSize="xl">
            {'Login'}
          </Text>
        </VStack>
      </Center>
      <Box bg="#E4E4ED" h="80vh">
        <Center>
          <FormControl w="75%" pt="14" isInvalid={isError}>
            {isError && <FormErrorMessage>{error}</FormErrorMessage>}
            <FormLabel mb="0">{'Username'}</FormLabel>
            <Input
              placeholder="codelande"
              bg="white"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <FormLabel pt="4" mb="0">
              {'Password'}
            </FormLabel>
            <InputGroup size="md">
              <Input
                bg="white"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick} me="1">
                  {show ? (
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
            <Center>
              <Button
                boxShadow="lg"
                my="8"
                color="white"
                bg="#797AA6"
                onClick={handleSubmit}
              >
                {'Login'}
                <ArrowRightIcon ms="1.5" boxSize="3" />
              </Button>
            </Center>
            <Center>
              <Divider borderColor="#9393B7" width="75%" />
            </Center>
          </FormControl>
        </Center>
        <Center>
          <Link py="7">{'Not register yet ?'}</Link>
        </Center>
      </Box>
    </Box>
  );
}

export default Login;
