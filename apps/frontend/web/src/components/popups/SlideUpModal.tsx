import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Box,
  Flex,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

const SlideUpModal = ({
  isOpen,
  onClose,
  color,
  title,
  content,
  submitText,
}: {
  isOpen: boolean;
  onClose: () => void;
  color: string;
  title: string;
  content: ReactElement;
  submitText: string;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      motionPreset="slideInBottom"
    >
      <ModalContent
        p="1rem"
        bg={`linear-gradient(${color}20, ${color}20), linear-gradient(#FFF, #FFF)`}
        display="flex"
        flexDir="column"
      >
        <ModalHeader textAlign="center" fontWeight="normal">
          {title}
        </ModalHeader>
        <ModalBody textAlign="center">
          {content}
          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="center"
            mt="3rem"
          >
            {}
            <Button
              onClick={onClose}
              mr=".5rem"
              fontWeight="normal"
              boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
              w="7rem"
            >
              {'Cancel'}
            </Button>
            <Button
              ml=".5rem"
              bgColor={color}
              color="#FFF"
              fontWeight="normal"
              w="7rem"
              boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
            >
              {submitText}
            </Button>
          </Flex>
        </ModalBody>
        <Box w="calc(100% + 2rem)" m="2rem -1rem -1rem -1rem">
          <Box h="4rem" bgColor={color + `20`}></Box>
          <Box h="3rem" bgColor={color + `80`}></Box>
          <Box h="2rem" bgColor={color + `FF`}></Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default SlideUpModal;
