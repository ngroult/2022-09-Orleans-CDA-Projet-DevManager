import {
  Button,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useRadioGroup,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CompanyImageRadioCard from '../../components/CompanyImageRadioCard';

const NewGame = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options = [
    'img0',
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
    'img7',
    'img8',
    'img9',
  ];
  const { getRootProps, getRadioProps } = useRadioGroup();
  const group = getRootProps();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState();
  const [ceo, setCeo] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    if (isSubmitted === true) {
      const createdAt = new Date();

      const data = {
        idUser: 1,
        createdAt: createdAt,
        companyName: companyName,
        ceo: ceo,
        location: location,
        idImage: 3,
      };

      console.log("kfjdhlgfjh");

      fetch('/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <>
      <Heading mt="1rem" mb="3rem" color="#B03D99">
        Create a new game
      </Heading>
      <Card w="100%" p="2rem" bgColor="#B03D9930" boxShadow="none">
        <CardBody
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            m="auto auto 1rem auto"
            boxSize="150px"
            src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-square-1-768x768.jpg"
            alt="Default image"
          />
          <Button
            onClick={onOpen}
            _hover={{
              border: 'none',
            }}
            _focus={{
              outline: 'none',
            }}
          >
            Choose another company picture
          </Button>
          <InputGroup
            display="flex"
            flexDirection="column"
            alignItems="center"
            m="2rem 0"
          >
            <Text textAlign="left" w="400px">
              Name of your company :
            </Text>
            <Input
              maxW="400px"
              placeholder="My Company..."
              mb="1rem"
              bgColor="#fff"
              _placeholder={{ opacity: 0.3 }}
              value={companyName}
              onChange={() => setCompanyName(companyName)}
            />
            <Text textAlign="left" w="400px">
              CEO of your company :
            </Text>
            <Input
              maxW="400px"
              placeholder="Elon Musk..."
              mb="1rem"
              bgColor="#fff"
              _placeholder={{ opacity: 0.3 }}
              value={ceo}
            />
            <Text textAlign="left" w="400px">
              Location of your company :
            </Text>
            <Input
              maxW="400px"
              placeholder="Paris, France..."
              bgColor="#fff"
              _placeholder={{ opacity: 0.3 }}
              value={location}
            />
          </InputGroup>
          <Button
            bgColor="#B03D99"
            color="#ffffff"
            _hover={{
              bgColor: '#B03D9990',
              outline: 'none',
              border: '#B03D9990',
            }}
            _focus={{
              outline: 'none',
            }}
            onClick={() => setIsSubmitted(true)}
          >
            Start the game
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent p="1rem">
          <ModalHeader textAlign="center">
            Choose a new company picture
          </ModalHeader>
          <ModalBody textAlign="center">
            <Grid
              {...group}
              templateColumns="repeat(5, 1fr)"
              m="2rem 0"
              gap="1rem"
            >
              {options.map((value, index) => {
                const radio = getRadioProps({ value });
                return <CompanyImageRadioCard key={index} {...radio} />;
              })}
            </Grid>
            <Button
              onClick={onClose}
              mr=".5rem"
              _focus={{
                outline: 'none',
              }}
              _hover={{
                outline: 'none',
                border: 'none',
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={onClose}
              ml=".5rem"
              bgColor="#B03D99"
              color="#ffffff"
              _focus={{
                outline: 'none',
              }}
              _hover={{
                bgColor: '#B03D9990',
                outline: 'none',
                border: '#B03D9990',
              }}
            >
              Save
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewGame;
