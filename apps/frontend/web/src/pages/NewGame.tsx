import { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Flex,
  Image,
  Button,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Heading,
  Box,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SlideUpModal from '../components/popups/SlideUpModal';
import GameImageFiller from '../components/GameImageFiller';
import AuthContext from '../contexts/AuthContext';
import { Game } from '@apps/backend-api';
import { DeepPartial } from '@libs/typings';
import fetchImages from '../utils/fetchImage';
const pageColor = 'purple';

const NewGame = () => {
  const navigate = useNavigate();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [gameData, setGameData] = useState<DeepPartial<Game>>({
    companyName: '',
    ceo: '',
    location: '',
    user: { id: user!.id },
  });
  const [selectedImageId, setSelectedImageId] = useState<number>();

  const insertImageIntoGameData = async (id: number | undefined) => {
    if (id) {
      const req = await fetch(`/api/images/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await req.json();

      setGameData((prev: DeepPartial<Game>) => ({
        ...prev,
        image: res,
      }));
    }
  };

  const startNewGame = async () => {
    try {
      const req = await fetch('/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      });

      if (req.ok) {
        return navigate('/game/overview');
      }
    } catch {}
  };

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages('company');

      setGameData((prev: DeepPartial<Game>) => ({
        ...prev,
        image: data[0],
      }));
      setSelectedImageId(data[0].id);
    };
    getImages();
  }, []);

  return (
    <>
      <Flex flexDir="column" bgColor={`${pageColor}.200`} minH="100vh">
        <Flex
          flexDir="column"
          alignItems="center"
          py="3rem"
          bgColor="#FFF"
          w="100%"
        >
          <Heading color={`${pageColor}.900`}>{'New Game'}</Heading>
        </Flex>
        <Flex flexDir="column" alignItems="center" flexGrow="1">
          <Image
            w="80px"
            src={`/${gameData?.image?.name}.png`}
            alt={`Image of the company ${gameData?.image?.description}`}
            m="2rem 0 1rem"
          />
          <Button
            onClick={onOpen}
            bgColor={`${pageColor}.900`}
            color="#FFF"
            w="auto"
            fontWeight="normal"
            boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
          >
            {'Change your building'}
          </Button>
          <FormControl
            display="flex"
            flexDir="column"
            alignItems="center"
            px="2rem"
            isInvalid={errors.companyName ? true : false}
          >
            <FormLabel
              htmlFor="companyName"
              textAlign="left"
              w="100%"
              maxW="400px"
              m="1.5rem 0 0"
            >
              {'Name of your company:'}
            </FormLabel>
            <Input
              id="companyName"
              maxW="400px"
              placeholder="My Company..."
              bgColor="#fff"
              _placeholder={{ opacity: 0.3 }}
              {...register('companyName', {
                required: 'The name of the company is required',
                minLength: {
                  value: 3,
                  message: 'Minimum length should be 3',
                },
                maxLength: {
                  value: 30,
                  message: 'Maximum length should be 30',
                },
                value: gameData.companyName,
                onChange: (e) =>
                  setGameData((prev: DeepPartial<Game>) => ({
                    ...prev,
                    companyName: e.target.value,
                  })),
              })}
            />
            {errors.companyName ? (
              <FormErrorMessage
                m="0 0 -1rem"
                h="1.8rem"
              >{`${errors.companyName.message}`}</FormErrorMessage>
            ) : (
              <Box mb="-1rem" h="1.8rem"></Box>
            )}
          </FormControl>

          <FormControl
            display="flex"
            flexDir="column"
            alignItems="center"
            px="2rem"
            isInvalid={errors.ceo ? true : false}
          >
            <FormLabel
              htmlFor="ceo"
              textAlign="left"
              m="1rem 0 0"
              w="100%"
              maxW="400px"
            >
              {'CEO of your company:'}
            </FormLabel>
            <Input
              id="ceo"
              maxW="400px"
              placeholder="Elon Musk..."
              bgColor="#fff"
              _placeholder={{ opacity: 0.3 }}
              {...register('ceo', {
                required: 'The name of the CEO is required',
                minLength: {
                  value: 3,
                  message: 'Minimum length should be 3',
                },
                maxLength: {
                  value: 30,
                  message: 'Maximum length should be 30',
                },
                value: gameData.ceo,
                onChange: (e) =>
                  setGameData((prev: DeepPartial<Game>) => ({
                    ...prev,
                    ceo: e.target.value,
                  })),
              })}
            />
            {errors.ceo ? (
              <FormErrorMessage
                m="0 0 -1rem"
                h="1.8rem"
              >{`${errors.ceo.message}`}</FormErrorMessage>
            ) : (
              <Box mb="-1rem" h="1.8rem"></Box>
            )}
          </FormControl>

          <FormControl
            display="flex"
            flexDir="column"
            alignItems="center"
            px="2rem"
            isInvalid={errors.location ? true : false}
          >
            <FormLabel
              htmlFor="location"
              textAlign="left"
              m="1rem 0 0"
              w="100%"
              maxW="400px"
            >
              {'Location of your company:'}
            </FormLabel>
            <Input
              maxW="400px"
              placeholder="Paris, France..."
              bgColor="#fff"
              _placeholder={{ opacity: 0.3 }}
              {...register('location', {
                required: 'The location is required',
                minLength: {
                  value: 3,
                  message: 'Minimum length should be 3',
                },
                maxLength: {
                  value: 30,
                  message: 'Maximum length should be 30',
                },
                value: gameData.location,
                onChange: (e) =>
                  setGameData((prev: DeepPartial<Game>) => ({
                    ...prev,
                    location: e.target.value,
                  })),
              })}
            />
            {errors.location ? (
              <FormErrorMessage
                m="0 0 -1rem"
                h="1.8rem"
              >{`${errors.location.message}`}</FormErrorMessage>
            ) : (
              <Box mb="-1rem" h="1.8rem"></Box>
            )}
          </FormControl>

          <Button
            bgColor={`${pageColor}.900`}
            color="#FFF"
            fontWeight="normal"
            my="2rem"
            boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
            onClick={handleSubmit(startNewGame)}
          >
            {'Start the game'}
          </Button>
        </Flex>
      </Flex>
      <SlideUpModal
        isOpen={isOpen}
        onClose={onClose}
        pageColor={pageColor}
        title="Choose a new avatar"
        content={
          <GameImageFiller
            selectedImageId={selectedImageId}
            setSelectedImageId={setSelectedImageId}
          />
        }
        submitText="Save"
        action={() => insertImageIntoGameData(selectedImageId)}
      />
    </>
  );
};

export default NewGame;
