import { Game } from '@apps/backend-api';
import { Box, Image, useRadio } from '@chakra-ui/react';
import { useEffect } from 'react';

function RadioCard({
  imageName,
  setPendingGameData,
  ...radioProps
}: {
  imageName: string;
  setPendingGameData: (value: Game) => void;
}) {
  const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);
  const input = getInputProps();

  useEffect(() => {
    console.log(getCheckboxProps());
  }, []);

  return (
    <Box as="label">
      <input {...input} hidden />
      <Box
        {...getCheckboxProps()}
        w="4.7rem"
        opacity={state.isChecked ? '1' : '0.2'}
        cursor="pointer"
        onClick={() =>
          setPendingGameData((prev) => ({
            ...prev,
            image: { id: input.value },
          }))
        }
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
