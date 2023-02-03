import { Box, Image, useRadio, UseRadioProps } from '@chakra-ui/react';

function RadioCard(props: UseRadioProps | undefined) {
  const { getInputProps, getCheckboxProps, state } = useRadio(props);

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
        <Image src={`/${input.value}.png`} alt={`Image of ${input.value}`} />
      </Box>
    </Box>
  );
}

export default RadioCard;
