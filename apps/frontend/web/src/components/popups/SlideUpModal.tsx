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
  pageColor,
  title,
  content,
  submitText,
  submitFunction,
  action,
}: {
  isOpen: boolean;
  onClose: () => void;
  pageColor: string;
  title: string;
  content: ReactElement;
  submitText: string;
  submitFunction?: () => void;
  action: () => void;
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
        bg={`linear-gradient(${pageColor}33, ${pageColor}33), linear-gradient(#FFF, #FFF)`}
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
              bgColor={pageColor}
              color="#FFF"
              fontWeight="normal"
              w="7rem"
              boxShadow="rgb(0 0 0 / 40%) 0px 3px 5px"
              onClick={() => {
                action();
                onClose();
              }}
            >
              {submitText}
            </Button>
          </Flex>
        </ModalBody>
        <Box w="calc(100% + 2rem)" m="2rem -1rem -1rem">
          <Box h="4rem" bgColor={`${pageColor}33`}></Box>
          <Box h="3rem" bgColor={`${pageColor}80`}></Box>
          <Box h="2rem" bgColor={`${pageColor}FF`}></Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default SlideUpModal;
