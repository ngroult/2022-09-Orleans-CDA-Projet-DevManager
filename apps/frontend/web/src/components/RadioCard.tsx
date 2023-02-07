import { Game, User } from '@apps/backend-api';
import { Box, Image, useRadio } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

function RadioCard({
  imageName,
  setPendingUserData,
  setPendingGameData,
  ...radioProps
}: {
  imageName: string;
  setPendingUserData?: Dispatch<SetStateAction<Partial<User>>>;
  setPendingGameData?: Dispatch<SetStateAction<Partial<Game>>>;
}) {
  const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);
  const input = getInputProps();

  const clickImage = () => {
    if (setPendingUserData) {
      setPendingUserData((prev: Partial<User>) => ({
        ...prev,
        image: { id: input.value },
      }));
    }
    if (setPendingGameData) {
      setPendingGameData((prev: Partial<Game>) => ({
        ...prev,
        image: { id: input.value },
      }));
    }
  };

  return (
    <Box as="label">
      <input {...input} hidden />
      <Box
        {...getCheckboxProps()}
        w="4.7rem"
        opacity={state.isChecked ? '1' : '0.2'}
        cursor="pointer"
        onClick={clickImage}
      >
        <Image
          src={`/game-icons/${input.value}.png`}
          alt={`Image of ${imageName}`}
        />
      </Box>
    </Box>
  );
}

export default RadioCard;
