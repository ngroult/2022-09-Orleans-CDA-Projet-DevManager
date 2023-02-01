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
import { useActionData } from 'react-router-dom';

const SlideUpModal = ({
  isOpen,
  onClose,
  pageColor,
  title,
  content,
  submitText,
  action,
}: {
  isOpen: boolean;
  onClose: () => void;
  pageColor: string;
  title: string;
  content: ReactElement;
  submitText: string;
  action: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'full', xl: 'xl', lg: 'lg', md: 'lg', sm: 'full' }}
      motionPreset="slideInBottom"
    >
      <ModalContent
        p="1rem"
        bg={`${pageColor}.200`}
        display="flex"
        flexDir="column"
      >
        <ModalHeader textAlign="center" fontStyle="bold">
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
              bgColor={`${pageColor}.900`}
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
          <Box h="4rem" bgColor={`${pageColor}.300`}></Box>
          <Box h="3rem" bgColor={`${pageColor}.500`}></Box>
          <Box h="2rem" bgColor={`${pageColor}.900`}></Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default SlideUpModal;
