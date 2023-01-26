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
import { useForm } from 'react-hook-form';
import AuthContext from '../contexts/AuthContext';

function Login() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isIncorrectLogs, setIsIncorrectLogs] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin = async () => {
    isIncorrectLogs ? setIsIncorrectLogs(false) : null;
    isServerError ? setIsServerError(false) : null;

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
        setIsIncorrectLogs(true);
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
      setIsServerError(true);
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
        isInvalid={errors.username || errors.password ? true : false}
      >
        <FormLabel textAlign="left" m="1rem 0 0" w="100%" maxW="400px">
          {'Username'}
        </FormLabel>
        <Input
          maxW="400px"
          placeholder="Enter username..."
          bgColor="#fff"
          _placeholder={{ opacity: 0.3 }}
          type="text"
          {...register('username', {
            required: 'Your username is required',
            value: username,
            onChange: (e) => setUsername(e.target.value),
          })}
        />
        <FormErrorMessage>
          {`${errors.username && errors.username.message}`}
        </FormErrorMessage>

        <FormLabel textAlign="left" m="1rem 0 0" w="100%" maxW="400px">
          {'Password'}
        </FormLabel>
        <InputGroup size="md" maxW="400px">
          <Input
            maxW="400px"
            placeholder="Enter password..."
            bgColor="#fff"
            _placeholder={{ opacity: 0.3 }}
            type={isVisiblePassword ? 'text' : 'password'}
            {...register('password', {
              required: 'Your password is required',
              value: password,
              onChange: (e) => setPassword(e.target.value),
            })}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
              me="1"
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
        <FormErrorMessage>
          {`${errors.password && errors.password.message}`}
        </FormErrorMessage>

        <Button
          w="10rem"
          bgColor="turquoise.900"
          color="#FFF"
          fontWeight="normal"
          my="2rem"
          boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
          onClick={handleSubmit(submitLogin)}
        >
          {'Sign in'}
        </Button>
        {isIncorrectLogs === true ? (
          <Text
            color="var(--chakra-colors-red-500)"
            fontFamily="body"
            fontSize="0.87rem"
            mt="-1rem"
            mb="1rem"
          >
            {'Username and / or password incorrect'}
          </Text>
        ) : null}
        {isServerError === true ? (
          <Text
            color="var(--chakra-colors-red-500)"
            fontFamily="body"
            fontSize="0.87rem"
            mt="-1rem"
            mb="1rem"
          >
            {'There seems to be an error, try again in a few minutes.'}
          </Text>
        ) : null}
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
