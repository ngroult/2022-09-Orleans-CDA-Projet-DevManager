import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
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
    <Flex
      flexDir="column"
      bgColor="turquoise.200"
      minH="100vh"
      alignItems="center"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        py="3rem"
        bgColor="#FFF"
        w="100%"
      >
        <Heading fontSize="3xl">{'DevManager'}</Heading>
        <Text color="turquoise.900" fontSize="xl">
          {'Login'}
        </Text>
      </Flex>

      <FormControl
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p="2rem 2rem 0"
        isInvalid={isError}
      >
        {isError && <FormErrorMessage>{error}</FormErrorMessage>}

        <FormLabel textAlign="left" m="1rem 0 0" w="100%" maxW="400px">
          {'Username'}
        </FormLabel>
        <Input
          maxW="400px"
          placeholder="Enter username..."
          bgColor="#fff"
          _placeholder={{ opacity: 0.3 }}
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <FormLabel textAlign="left" m="1rem 0 0" w="100%" maxW="400px">
          {'Password'}
        </FormLabel>
        <InputGroup size="md" maxW="400px">
          <Input
            maxW="400px"
            placeholder="Enter password..."
            bgColor="#fff"
            _placeholder={{ opacity: 0.3 }}
            type={show ? 'text' : 'password'}
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

        <Button
          w="10rem"
          bgColor="turquoise.900"
          color="#FFF"
          fontWeight="normal"
          my="2rem"
          boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
          onClick={handleSubmit}
        >
          {'Sign in'}
        </Button>
      </FormControl>

      <Divider borderColor="grey" width="75%" maxW="400px" />

      <Link to="/register">
        <Text textDecoration="underline" py="7">
          {'You are not register yet?'}
        </Text>
      </Link>
    </Flex>
  );
}

export default Login;
