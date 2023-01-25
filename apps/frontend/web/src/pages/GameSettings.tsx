import { useState } from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import SlideUpModal from '../components/popups/SlideUpModal';
import GameImageFiller from '../components/GameImageFiller';
import GameDetailsFiller from '../components/GameDetailsFiller';
import ResetGameFiller from '../components/ResetGameFiller';
import Navbar from '../components/Navbar';
const pageColor = 'gold';

const GameSettings = () => {
  const [companyImage, setCompanyImage] = useState('1');
  const [selectedImage, setSelectedImage] = useState(companyImage);
  const gameImage = useDisclosure();
  const gameDetails = useDisclosure();
  const resetGame = useDisclosure();

  return (
    <>
      <Navbar />
      <Box position="absolute" top="0" margin="auto" w="100%" zIndex="0">
        <Flex flexDir="column" w="100%" h="100vh">
          <Flex
            flexDir="column"
            alignItems="center"
            bgColor={`${pageColor}.200`}
            w="100%"
            flexGrow="1"
          >
            <Image
              w="5.5rem"
              src={`/company${companyImage}.png`}
              alt={`Image of ${companyImage}`}
              mt="2rem"
              mb="1rem"
            />
            <Button
              onClick={gameImage.onOpen}
              bgColor={`${pageColor}.900`}
              color="#FFF"
              w="8rem"
              fontWeight="normal"
              boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
            >
              {'Modify'}
            </Button>
            <VStack m="2rem 0">
              <HStack>
                <Text textAlign="right">{'Company name :'}</Text>
                <Text textAlign="left">{'My Company'}</Text>
              </HStack>
              <HStack>
                <Text textAlign="right">{'CEO name :'}</Text>
                <Text textAlign="left">{'Elon Musk'}</Text>
              </HStack>
              <HStack>
                <Text textAlign="right">{'Location :'}</Text>
                <Text textAlign="left">{'Paris, France'}</Text>
              </HStack>
            </VStack>
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
            <Button
              onClick={resetGame.onOpen}
              boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
              mt="2rem"
              bgColor="#E7008C"
              color="#FFF"
              w="13rem"
              fontWeight="normal"
            >
              {'Reset the game'}
            </Button>
          </Flex>
        </Flex>
        <SlideUpModal
          isOpen={gameImage.isOpen}
          onClose={gameImage.onClose}
          pageColor="#D4B514"
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
        <SlideUpModal
          isOpen={gameDetails.isOpen}
          onClose={gameDetails.onClose}
          pageColor="#D4B514"
          title="Edit the game details"
          content={<GameDetailsFiller />}
          submitText="Save"
        />
        <SlideUpModal
          isOpen={resetGame.isOpen}
          onClose={resetGame.onClose}
          pageColor="#D4B514"
          title="Write your password to confirm you want to reset the game"
          content={<ResetGameFiller />}
          submitText="Reset"
        />
      </Box>
    </>
  );
};

export default GameSettings;
