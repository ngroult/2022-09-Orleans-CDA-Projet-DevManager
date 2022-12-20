import { useState } from 'react';
import {
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useRadioGroup,
} from '@chakra-ui/react';
import CompanyImageRadioCard from '../components/CompanyImageRadioCard';

const ModalCompanyImage = ({
  setCompanyImage,
}: {
  setCompanyImage: (value: string) => void;
}) => {
  const [selectedImage, setSelectedImage] = useState('1');

  const { isOpen, onClose } = useDisclosure();
  const { getRootProps, getRadioProps } = useRadioGroup();
  const group = getRootProps();

  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const handleSaveCompanyImage = () => {
    onClose();
    setCompanyImage(selectedImage);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent p="1rem">
        <ModalHeader textAlign="center">
          {'Choose a new company picture'}
        </ModalHeader>
        <ModalBody textAlign="center">
          <Grid
            {...group}
            templateColumns="repeat(5, 1fr)"
            m="2rem 0"
            gap="1rem"
          >
            {options.map((value, index) => {
              const radioProps = getRadioProps({ value });
              return (
                <CompanyImageRadioCard
                  key={index}
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  {...radioProps}
                />
              );
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
            {'Cancel'}
          </Button>
          <Button
            onClick={handleSaveCompanyImage}
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
            {'Save'}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalCompanyImage;
