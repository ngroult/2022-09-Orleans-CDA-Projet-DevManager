import { useContext, useState, useContext } from 'react';
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
  Heading,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import SlideUpModal from '../components/popups/SlideUpModal';
import UserImageFiller from '../components/UserImageFiller';
import UserContactFiller from '../components/UserContactFiller';
import UserPasswordFiller from '../components/UserPasswordFiller';
import DeleteAccountFiller from '../components/DeleteAccountFiller';
import Navbar from '../components/Navbar';
import AuthContext from '../contexts/AuthContext';
const pageColor = 'turquoise';

const AccountSettings = () => {
  const [gamerImage, setGamerImage] = useState('man1');
  const [selectedImage, setSelectedImage] = useState(gamerImage);
  const userImage = useDisclosure();
  const userContact = useDisclosure();
  const userPassword = useDisclosure();
  const deleteAccount = useDisclosure();
  const { user } = useContext(AuthContext);

  const { user } = useContext(AuthContext);

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
      <Box position="absolute" top="0" margin="auto" w="100%" zIndex="-1">
        <Center>
          <Heading mt="10" mb="10" color={`${pageColor}`}>
            {'Account Setting'}
          </Heading>
        </Center>
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
              src={`/${gamerImage}.png`}
              alt={`Image of ${gamerImage}`}
              mt="2rem"
              mb="1rem"
            />
            <Button
              onClick={userImage.onOpen}
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
                <Text textAlign="right">{'Username :'}</Text>
                <Text textAlign="left">{user?.username}</Text>
              </HStack>
              <HStack>
                <Text textAlign="right">{'E-mail :'}</Text>
                <Text textAlign="left">{user?.email}</Text>
              </HStack>
              <HStack>
                <Text textAlign="right">{'Password :'}</Text>
                <Text textAlign="left">{user?.password}</Text>
              </HStack>
            </VStack>
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
            <Button
              onClick={userPassword.onOpen}
              boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
              mt="0.8rem"
              bgColor={`${pageColor}.900`}
              color="#FFF"
              w="13rem"
              fontWeight="normal"
            >
              {'Edit password'}
            </Button>
            <Button
              onClick={deleteAccount.onOpen}
              boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
              mt="2rem"
              bgColor="pink.900"
              color="#FFF"
              w="13rem"
              fontWeight="normal"
            >
              {'Delete account'}
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <SlideUpModal
        isOpen={userImage.isOpen}
        onClose={userImage.onClose}
        pageColor="#42B7B4"
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
        pageColor="#42B7B4"
        title="Edit your contact details"
        content={<UserContactFiller setFormData={setFormData} />}
        submitText="Save"
        action={updateUserSettings}
      />
      <SlideUpModal
        isOpen={userPassword.isOpen}
        onClose={userPassword.onClose}
        pageColor="#42B7B4"
        title="Edit your password"
        content={<UserPasswordFiller setFormData={setFormData} />}
        submitText="Save"
        action={updateUserSettings}
      />
      <SlideUpModal
        isOpen={deleteAccount.isOpen}
        onClose={deleteAccount.onClose}
        pageColor="#42B7B4"
        title="Write your password to confirm you want to delete your account"
        content={<DeleteAccountFiller />}
        submitText="Delete"
        action={updateUserSettings}
      />
      </Box>
    </>
  );
};

export default AccountSettings;
