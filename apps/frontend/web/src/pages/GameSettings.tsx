import { useContext, useState } from 'react';
import {
  Text,
  Flex,
  Image,
  Grid,
  Button,
  VStack,
  HStack,
  useDisclosure,
  Box,
  Center,
  Heading,
  GridItem,
} from '@chakra-ui/react';
import SlideUpModal from '../components/popups/SlideUpModal';
import GameImageFiller from '../components/GameImageFiller';
import GameDetailsFiller from '../components/GameDetailsFiller';
import ResetGameFiller from '../components/ResetGameFiller';
import Navbar from '../components/Navbar';
import AuthContext from '../contexts/AuthContext';
import { useToast } from '@chakra-ui/react';
const pageColor = 'gold';
const displayDesktop = {
  base: 'none',
  xl: 'flex',
  lg: 'none',
  md: 'none',
  sm: 'none',
};
const displayMobile = {
  base: 'flex',
  xl: 'none',
  lg: 'flex',
  md: 'flex',
  sm: 'flex',
};
const marginTopButton = '1rem';

const GameSettings = () => {
  const [companyImage, setCompanyImage] = useState('1');
  const [selectedImage, setSelectedImage] = useState(companyImage);
  const gameImage = useDisclosure();
  const gameDetails = useDisclosure();
  const resetGame = useDisclosure();

  const { user } = useContext(AuthContext);
  const toast = useToast();

  const deleteGame = async () => {
    try {
      await fetch(`/api/games/${user!.id}`, {
        method: 'DELETE',
      });
      toast({
        title: 'Game deleted.',
        description: "We're sorry to see you go!",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'There was an error deleting your game.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const updateGameSettings = () => {
    fetch(`/api/games/${user!.id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());

    setFormData({});
  };

  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  return (
    <>
      <Navbar />
      <Box position="absolute" top="0" margin="auto" w="100%">
        <Center>
          <Heading mt="10" mb="10" color={`${pageColor}.900`}>
            {'Game Setting'}
          </Heading>
        </Center>
        <Flex w="100%" h={{ base: '100vh', xl: 'auto' }}>
          <Flex
            justifyContent="space-around"
            bgColor={{
              base: `${pageColor}.200`,
              xl: 'white',
              lg: `${pageColor}.200`,
              md: `${pageColor}.200`,
              sm: `${pageColor}.200`,
            }}
            flexGrow="1"
          >
            <VStack bgColor={`${pageColor}.200`} p="8vh">
              <Text display={displayDesktop} as="b" fontSize="xl" mb="5">
                {`Change your informations`}
              </Text>
              <Image
                display={displayMobile}
                w="5.5rem"
                src={`/company${companyImage}.png`}
                alt={`Image of ${companyImage}`}
                mt="2rem"
                mb="1rem"
              />
              <Button
                display={displayMobile}
                onClick={gameImage.onOpen}
                bgColor={`${pageColor}.900`}
                color="#FFF"
                mb={marginTopButton}
                w="8rem"
                fontWeight="normal"
                boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
              >
                {'Modify'}
              </Button>
              <Grid templateColumns="repeat(1, 1fr)">
                <GridItem mt={marginTopButton}>
                  <Text as="b">{'Company name :'}</Text>
                </GridItem>
                <GridItem>
                  <Text bgColor="white" rounded="5px" py="1" px="4">
                    {'My Company'}
                  </Text>
                </GridItem>
                <GridItem mt={marginTopButton}>
                  <Text as="b">{'CEO name :'}</Text>
                </GridItem>
                <GridItem>
                  <Text bgColor="white" rounded="5px" py="1" px="4">
                    {'Elon Musk'}
                  </Text>
                </GridItem>
                <GridItem mt={marginTopButton}>
                  <Text as="b">{'Location :'}</Text>
                </GridItem>
                <GridItem>
                  <Text bgColor="white" rounded="5px" py="1" px="4">
                    {'Paris, France'}
                  </Text>
                </GridItem>
                <GridItem my={marginTopButton}>
                  <Button
                    onClick={gameDetails.onOpen}
                    boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
                    bgColor={`${pageColor}.900`}
                    color="#FFF"
                    w="13rem"
                    fontWeight="normal"
                  >
                    {'Edit game details'}
                  </Button>
                </GridItem>
                <GridItem my={marginTopButton}>
                  <Button
                    onClick={resetGame.onOpen}
                    boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
                    mt="2rem"
                    bgColor="pink.900"
                    color="#FFF"
                    w="13rem"
                    fontWeight="normal"
                  >
                    {'Reset the game'}
                  </Button>
                </GridItem>
              </Grid>
            </VStack>

            <Box
              boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
              rounded="5px"
              display={displayDesktop}
              p="8vh"
            >
              <VStack>
                <Image
                  display={displayDesktop}
                  w="5.5rem"
                  src={`/company${companyImage}.png`}
                  alt={`Image of ${companyImage}`}
                />
                <GameImageFiller
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
                <Button
                  display={displayDesktop}
                  onClick={gameImage.onOpen}
                  bgColor={`${pageColor}.900`}
                  color="#FFF"
                  w="8rem"
                  fontWeight="normal"
                  boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
                >
                  {'Modify'}
                </Button>
              </VStack>
            </Box>
          </Flex>
        </Flex>
        <SlideUpModal
          isOpen={gameImage.isOpen}
          onClose={gameImage.onClose}
          pageColor={pageColor}
          title="Choose a new avatar"
          content={
            <GameImageFiller
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              setFormData={setFormData}
            />
          }
          submitText="Save"
          action={updateGameSettings}
        />
        <SlideUpModal
          isOpen={gameDetails.isOpen}
          onClose={gameDetails.onClose}
          pageColor={pageColor}
          title="Edit the game details"
          content={<GameDetailsFiller setFormData={setFormData} />}
          submitText="Save"
          action={updateGameSettings}
        />
        <SlideUpModal
          isOpen={resetGame.isOpen}
          onClose={resetGame.onClose}
          pageColor="pink"
          title="Write your password to confirm you want to reset the game"
          content={<ResetGameFiller />}
          submitText="Reset"
          action={deleteGame}
        />
      </Box>
    </>
  );
};

export default GameSettings;
