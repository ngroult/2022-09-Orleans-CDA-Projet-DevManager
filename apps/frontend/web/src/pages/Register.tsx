import {
  Box,
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
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { RegisterResponse } from '@libs/typings';

function Register() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [serverError, setServerError] = useState<
    | null
    | (RegisterResponse & {
        internalError?: { message: string };
      })
  >(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitRegister = async () => {
    serverError !== null ? setServerError(null) : null;

    try {
      const registerResponse = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const jsonResponse = await registerResponse.json();

      if (jsonResponse.statusCode === 400) {
        if (jsonResponse.takenUsername) {
          setServerError((prev) => ({
            ...prev,
            takenUsername: { message: jsonResponse.takenUsername.message },
          }));
        }
        if (jsonResponse.registeredEmail) {
          setServerError((prev) => ({
            ...prev,
            registeredEmail: { message: jsonResponse.registeredEmail.message },
          }));
        }
      } else {
        navigate('/new-game');
      }
    } catch (err) {
      setServerError({
        internalError: {
          message: 'There seems to be an error, try again in a few minutes.',
        },
      });
    }
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

      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p="2rem 2rem 0"
        w="100%"
      >
        <FormControl
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          isInvalid={
            errors.username || serverError?.takenUsername ? true : false
          }
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
            {...register('username', {
              required: 'The username is required',
              minLength: {
                value: 3,
                message: 'Minimum length should be 3',
              },
              maxLength: {
                value: 30,
                message: 'Maximum length should be 30',
              },
              value: username,
              onChange: (e) => setUsername(e.target.value),
            })}
          />
          {errors.username ? (
            <FormErrorMessage
              m="0 0 -1rem"
              h="1.8rem"
            >{`${errors.username.message}`}</FormErrorMessage>
          ) : serverError?.takenUsername ? (
            <FormErrorMessage
              m="0 0 -1rem"
              h="1.8rem"
            >{`${serverError?.takenUsername.message}`}</FormErrorMessage>
          ) : (
            <Box mb="-1rem" h="1.8rem"></Box>
          )}
        </FormControl>

        <FormControl
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          isInvalid={
            errors.email || serverError?.registeredEmail ? true : false
          }
        >
          <FormLabel textAlign="left" m="1rem 0 0" w="100%" maxW="400px">
            {'E-mail'}
          </FormLabel>
          <Input
            maxW="400px"
            placeholder="Enter your email..."
            bgColor="#fff"
            _placeholder={{ opacity: 0.3 }}
            type="email"
            {...register('email', {
              required: 'The email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
              minLength: {
                value: 4,
                message: 'Minimum length should be 4',
              },
              value: email,
              onChange: (e) => setEmail(e.target.value),
            })}
          />
          {errors.email ? (
            <FormErrorMessage
              m="0 0 -1rem"
              h="1.8rem"
            >{`${errors.email.message}`}</FormErrorMessage>
          ) : serverError?.registeredEmail ? (
            <FormErrorMessage
              m="0 0 -1rem"
              h="1.8rem"
            >{`${serverError?.registeredEmail.message}`}</FormErrorMessage>
          ) : (
            <Box mb="-1rem" h="1.8rem"></Box>
          )}
        </FormControl>

        <FormControl
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          isInvalid={errors.password ? true : false}
        >
          <FormLabel textAlign="left" m="1rem 0 0" w="100%" maxW="400px">
            {'Password'}
          </FormLabel>
          <InputGroup size="md" maxW="400px">
            <Input
              maxW="400px"
              placeholder="Create your password..."
              bgColor="#fff"
              _placeholder={{ opacity: 0.3 }}
              type={isVisiblePassword ? 'text' : 'password'}
              {...register('password', {
                required: 'The password is required',
                minLength: {
                  value: 6,
                  message: 'Minimum length should be 6',
                },
                maxLength: {
                  value: 50,
                  message: 'Maximum length should be 50',
                },
                value: password,
                onChange: (e) => setPassword(e.target.value),
              })}
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
          {errors.password ? (
            <FormErrorMessage
              m="0 0 -1rem"
              h="1.8rem"
            >{`${errors.password.message}`}</FormErrorMessage>
          ) : (
            <Box mb="-1rem" h="1.8rem"></Box>
          )}
        </FormControl>

        <Button
          w="13rem"
          bgColor="blue.900"
          color="#FFF"
          fontWeight="normal"
          my="2rem"
          boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
          onClick={handleSubmit(submitRegister)}
        >
          {'Create your account'}
        </Button>
        {serverError?.internalError ? (
          <Text
            color="var(--chakra-colors-red-500)"
            fontFamily="body"
            fontSize="0.87rem"
            mt="-1rem"
            mb="1rem"
          >
            {serverError?.internalError.message}
          </Text>
        ) : null}
      </Flex>

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
