import {
  Badge,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  HStack,
  Button,
  Input,
  useNumberInput,
} from '@chakra-ui/react';
// import {
//   GameCharacter,
//   ResourceUsed,
//   ResourceProduced,
// } from '@apps/backend-api';
// import BadgeResource from '../BadgeResource';

function CharacterModal({
  isOpen,
  onClose,
  quantityAddCharacters,
  setQuantityAddCharacters,
  color,
}: {
  isOpen: boolean;
  onClose: () => void;
  quantityAddCharacters: number;
  setQuantityAddCharacters: any;
  color: string;
}) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: quantityAddCharacters,
      min: 1,
      max: 100,
      onChange: (e) => setQuantityAddCharacters(e),
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalContent bg={`${color}.200`}>
          <ModalCloseButton />
          <ModalBody pt={'10'} px={'0'}>
            <HStack maxW="320px">
              <Button bg={`${color}.900`} color="white" {...inc}>{`+`}</Button>
              <Input {...input} bgColor="white" />
              <Button bg={`${color}.900`} {...dec}>{`-`}</Button>
            </HStack>
            <Center>
              <Button
                onClick={onClose}
                bg={`${color}.900`}
                color="white"
              >{`Confirm`}</Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CharacterModal;
