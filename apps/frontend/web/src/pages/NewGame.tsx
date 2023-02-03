import { useState } from 'react';
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
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SlideUpModal from '../components/popups/SlideUpModal';
import GameImageFiller from '../components/GameImageFiller';
const pageColor = 'purple';

const NewGame = () => {
  const navigate = useNavigate();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [companyImage, setCompanyImage] = useState('company1');
  const [selectedImage, setSelectedImage] = useState(companyImage);
  const [companyName, setCompanyName] = useState('');
  const [ceo, setCeo] = useState('');
  const [location, setLocation] = useState('');

  const startNewGame = async (values: {
    companyName: string;
    ceo: string;
    location: string;
  }) => {
    const dataForm = {
      idUser: 1,
      companyName: values.companyName,
      ceo: values.ceo,
      location: values.location,
      idImage: parseInt(companyImage, 10),
    };

    try {
      const response = await fetch('/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForm),
      });

      if (response.ok) {
        return navigate('/game/overview');
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
            src={`/${companyImage}.png`}
            alt={`Image of the company ${companyImage}`}
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
            isInvalid={
              errors.companyName || errors.ceo || errors.location ? true : false
            }
          >
            <FormLabel
              htmlFor="companyName"
              textAlign="left"
              w="100%"
              maxW="400px"
              m="1.5rem 0 0"
            >
              {'Name of your company :'}
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
                  value: 4,
                  message: 'Minimum length should be 4',
                },
                value: companyName,
                onChange: (e) => setCompanyName(e.target.value),
              })}
            />
            <FormErrorMessage>
              {`${errors.companyName && errors.companyName.message}`}
            </FormErrorMessage>

            <FormLabel
              htmlFor="ceo"
              textAlign="left"
              m="1rem 0 0"
              w="100%"
              maxW="400px"
            >
              {'CEO of your company :'}
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
                  value: 4,
                  message: 'Minimum length should be 4',
                },
                value: ceo,
                onChange: (e) => setCeo(e.target.value),
              })}
            />
            <FormErrorMessage>
              {`${errors.ceo && errors.ceo.message}`}
            </FormErrorMessage>

            <FormLabel
              htmlFor="location"
              textAlign="left"
              m="1rem 0 0"
              w="100%"
              maxW="400px"
            >
              {'Location of your company :'}
            </FormLabel>
            <Input
              maxW="400px"
              placeholder="Paris, France..."
              bgColor="#fff"
              _placeholder={{ opacity: 0.3 }}
              {...register('location', {
                required: 'The location is required',
                minLength: {
                  value: 4,
                  message: 'Minimum length should be 4',
                },
                value: location,
                onChange: (e) => setLocation(e.target.value),
              })}
            />
            <FormErrorMessage>
              {`${errors.location && errors.location.message}`}
            </FormErrorMessage>
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
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        }
        submitText="Save"
        submitFunction={() => setCompanyImage(selectedImage)}
      />
    </>
  );
};

export default NewGame;
