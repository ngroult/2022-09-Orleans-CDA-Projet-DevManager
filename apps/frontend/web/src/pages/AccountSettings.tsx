import { useContext, useState } from 'react';
import {
  Text,
  Flex,
  Image,
  Button,
  VStack,
  useDisclosure,
  Box,
  Heading,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import SlideUpModal from '../components/popups/SlideUpModal';
import UserImageFiller from '../components/UserImageFiller';
import UserContactFiller from '../components/UserContactFiller';
import UserPasswordFiller from '../components/UserPasswordFiller';
import DeleteAccountFiller from '../components/DeleteAccountFiller';
import Navbar from '../components/Navbar';
import AuthContext from '../contexts/AuthContext';
import { useToast } from '@chakra-ui/react';
const pageColor = 'turquoise';
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

const AccountSettings = () => {
  const [gamerImage, setGamerImage] = useState('man1');
  const [selectedImage, setSelectedImage] = useState(gamerImage);
  const userImage = useDisclosure();
  const userContact = useDisclosure();
  const userPassword = useDisclosure();
  const deleteAccount = useDisclosure();

  const { user } = useContext(AuthContext);
  const toast = useToast();

  const deleteUserAccount = async () => {
    try {
      await fetch(`/api/users/${user!.id}`, {
        method: 'DELETE',
      });
      toast({
        title: 'Account deleted.',
        description: "We're sorry to see you go!",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'There was an error deleting your account.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const updateUserSettings = () => {
    fetch(`/api/users/${user!.id}`, {
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
      <Flex
        flexDir="column"
        bgColor={{
          base: `${pageColor}.200`,
          xl: 'white',
          lg: `${pageColor}.200`,
          md: `${pageColor}.200`,
          sm: `${pageColor}.200`,
        }}
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
          <Heading color={`${pageColor}.900`}>{'Account Setting'}</Heading>
        </Flex>
        <Flex w="100%">
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
            <VStack
              bgColor={`${pageColor}.200`}
              boxSize={{ base: 'md', xl: 'xl', lg: 'lg' }}
              w="auto"
              h="auto"
              p="10"
            >
              <Text display={displayDesktop} as="b" fontSize="xl" mb="5">
                {`Change your informations`}
              </Text>
              <Image
                display={displayMobile}
                w="5.5rem"
                src={`/${gamerImage}.png`}
                alt={`Image of ${gamerImage}`}
                mt="2rem"
                mb="1rem"
              />
              <Button
                display={displayMobile}
                onClick={userImage.onOpen}
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
                  <Text as="b">{'Username:'}</Text>
                </GridItem>
                <GridItem>
                  <Text bgColor="white" rounded="5px" py="1" px="4">
                    {user?.username}
                  </Text>
                </GridItem>
                <GridItem mt={marginTopButton}>
                  <Text as="b">{'E-mail:'}</Text>
                </GridItem>
                <GridItem>
                  <Text bgColor="white" rounded="5px" py="1" px="4">
                    {user?.email}
                  </Text>
                </GridItem>
                <GridItem mt={marginTopButton}>
                  <Text as="b">{'Password:'}</Text>
                </GridItem>
                <GridItem>
                  <Text bgColor="white" rounded="5px" py="1" px="4">
                    {user?.password}
                  </Text>
                </GridItem>
                <GridItem my={marginTopButton}>
                  <Button
                    onClick={userContact.onOpen}
                    boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
                    bgColor={`${pageColor}.900`}
                    color="#FFF"
                    w="13rem"
                    fontWeight="normal"
                  >
                    {'Edit contact details'}
                  </Button>
                </GridItem>
                <GridItem my={marginTopButton}>
                  <Button
                    onClick={userPassword.onOpen}
                    boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
                    bgColor={`${pageColor}.900`}
                    color="#FFF"
                    w="13rem"
                    fontWeight="normal"
                  >
                    {'Edit password'}
                  </Button>
                </GridItem>
                <GridItem my={marginTopButton}>
                  <Button
                    onClick={deleteAccount.onOpen}
                    boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
                    bgColor={`${pageColor}.900`}
                    color="#FFF"
                    w="13rem"
                    fontWeight="normal"
                  >
                    {'Delete account'}
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
                  src={`/${gamerImage}.png`}
                  alt={`Image of ${gamerImage}`}
                  mb="2rem"
                />
                <UserImageFiller
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  setFormData={setFormData}
                />
                <Button
                  ml=".5rem"
                  bgColor={`${pageColor}.900`}
                  color="#FFF"
                  fontWeight="normal"
                  w="7rem"
                  boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
                  onClick={() => {
                    updateUserSettings();
                  }}
                >
                  {'Modify'}
                </Button>
              </VStack>
            </Box>
          </Flex>
        </Flex>
        <SlideUpModal
          isOpen={userImage.isOpen}
          onClose={userImage.onClose}
          pageColor={pageColor}
          title="Choose a new avatar"
          content={
            <UserImageFiller
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              setFormData={setFormData}
            />
          }
          submitText="Save"
          action={updateUserSettings}
        />
        <SlideUpModal
          isOpen={userContact.isOpen}
          onClose={userContact.onClose}
          pageColor={pageColor}
          title="Edit your contact details"
          content={<UserContactFiller setFormData={setFormData} />}
          submitText="Save"
          action={updateUserSettings}
        />
        <SlideUpModal
          isOpen={userPassword.isOpen}
          onClose={userPassword.onClose}
          pageColor={pageColor}
          title="Edit your password"
          content={<UserPasswordFiller setFormData={setFormData} />}
          submitText="Save"
          action={updateUserSettings}
        />
        <SlideUpModal
          isOpen={deleteAccount.isOpen}
          onClose={deleteAccount.onClose}
          pageColor={pageColor}
          title="Write your password to confirm you want to delete your account"
          content={<DeleteAccountFiller />}
          submitText="Delete"
          action={deleteUserAccount}
        />
      </Flex>
    </>
  );
};

export default AccountSettings;
