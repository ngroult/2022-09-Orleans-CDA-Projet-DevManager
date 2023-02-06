import { Box, Image, useRadio, UseRadioProps } from '@chakra-ui/react';

function RadioCard({
  imageName,
  setSelectedImage,
  ...radioProps
}: {
  imageName: string;
  setSelectedImage: (value: string) => void;
}) {
  const { getInputProps, getCheckboxProps, state } = useRadio(radioProps);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} hidden />
      <Box
        {...checkbox}
        w="4.7rem"
        opacity={state.isChecked ? '1' : '0.2'}
        cursor="pointer"
      >
        <Image
          src={`/game-icons/${input.value}.png`}
          alt={`Image of ${imageName}`}
          onClick={() => {
            setSelectedImage(input.value);
            console.log(state);
          }}
        />
      </Box>
    </Box>
  );
}

export default RadioCard;
