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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import SlideUpModal from '../components/popups/SlideUpModal';
import UserImageFiller from '../components/UserImageFiller';
import UserContactFiller from '../components/UserContactFiller';
import UserPasswordFiller from '../components/UserPasswordFiller';
import DeleteAccountFiller from '../components/DeleteAccountFiller';
const pageColor = 'turquoise';

const AccountSettings = () => {
  const [gamerImage, setGamerImage] = useState('man1');
  const [selectedImage, setSelectedImage] = useState(gamerImage);
  const userImage = useDisclosure();
  const userContact = useDisclosure();
  const userPassword = useDisclosure();
  const deleteAccount = useDisclosure();

  const getFormData = () => {
    // do something
  };
  const [formData, setFormData] = useState({});

  return (
    <>
      <Flex flexDir="column" w="100%" h="100vh">
        <Grid
          w="100%"
          h="4.5rem"
          autoFlow="column"
          templateColumns="20% auto 20%"
          alignItems="center"
          justifyItems="center"
        >
          <HamburgerIcon boxSize="5" />
          <Text color={`${pageColor}.900`} fontSize="1.2rem">
            {'Account Settings'}
          </Text>
        </Grid>
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
              <Text textAlign="left">{'Codelande'}</Text>
            </HStack>
            <HStack>
              <Text textAlign="right">{'E-mail :'}</Text>
              <Text textAlign="left">{'codelande@mail.com'}</Text>
            </HStack>
            <HStack>
              <Text textAlign="right">{'Password :'}</Text>
              <Text textAlign="left">{'***************'}</Text>
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
      <SlideUpModal
        isOpen={userImage.isOpen}
        onClose={userImage.onClose}
        pageColor="#42B7B4"
        title="Choose a new avatar"
        content={
          <UserImageFiller
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            formData={formData}
            setFormData={setFormData}
          />
        }
        submitText="Save"
        action={getFormData()}
      />
      <SlideUpModal
        isOpen={userContact.isOpen}
        onClose={userContact.onClose}
        pageColor="#42B7B4"
        title="Edit your contact details"
        content={
          <UserContactFiller formData={formData} setFormData={setFormData} />
        }
        submitText="Save"
        action={getFormData()}
      />
      <SlideUpModal
        isOpen={userPassword.isOpen}
        onClose={userPassword.onClose}
        pageColor="#42B7B4"
        title="Edit your password"
        content={
          <UserPasswordFiller formData={formData} setFormData={setFormData} />
        }
        submitText="Save"
        action={getFormData()}
      />
      <SlideUpModal
        isOpen={deleteAccount.isOpen}
        onClose={deleteAccount.onClose}
        pageColor="#42B7B4"
        title="Write your password to confirm you want to delete your account"
        content={<DeleteAccountFiller />}
        submitText="Delete"
      />
    </>
  );
};

export default AccountSettings;
