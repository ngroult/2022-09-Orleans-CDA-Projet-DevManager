import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => setIsShow(!isShow);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isError = email === '';

  const handleSubmit = async () => {
    await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    }).then(() => {
      navigate('/new-game');
    });
  };

  return (
    <Flex flexDir="column" bgColor="blue.200" minH="100vh" alignItems="center">
      <Flex
        flexDir="column"
        alignItems="center"
        py="3rem"
        bgColor="#FFF"
        w="100%"
      >
        <Heading fontSize="3xl">{'DevManager'}</Heading>
        <Text color="blue.900" fontSize="xl">
          {'Register'}
        </Text>
      </Flex>

      <FormControl
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p="2rem 2rem 0"
      >
        <FormLabel textAlign="left" m="1rem 0 0" w="100%" maxW="400px">
          {'Username'}
        </FormLabel>
        <Input
          maxW="400px"
          placeholder="Create username..."
          bgColor="#fff"
          _placeholder={{ opacity: 0.3 }}
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <FormLabel textAlign="left" m="1rem 0 0" w="100%" maxW="400px">
          {'E-mail'}
        </FormLabel>
        <Input
          maxW="400px"
          placeholder="Enter your email..."
          bgColor="#fff"
          _placeholder={{ opacity: 0.3 }}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {!isError ? (
          <FormHelperText>{"We don't share tour email"}</FormHelperText>
        ) : (
          <FormErrorMessage>{'Email is required.'}</FormErrorMessage>
        )}

        <FormLabel textAlign="left" m="1rem 0 0" w="100%" maxW="400px">
          {'Password'}
        </FormLabel>
        <InputGroup size="md" maxW="400px">
          <Input
            maxW="400px"
            placeholder="Create your password..."
            bgColor="#fff"
            _placeholder={{ opacity: 0.3 }}
            type={isShow ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {isShow ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button
          w="13rem"
          bgColor="blue.900"
          color="#FFF"
          fontWeight="normal"
          my="2rem"
          boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
          onClick={handleSubmit}
        >
          {'Create your account'}
        </Button>
      </FormControl>

      <Divider borderColor="grey" width="75%" maxW="400px" />

      <Link to="/login">
        <Text textDecoration="underline" py="7">
          {'Have you already an account?'}
        </Text>
      </Link>
    </Flex>
  );
}

export default Register;
