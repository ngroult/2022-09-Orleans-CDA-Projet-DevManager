import { Box, Image, useRadio } from '@chakra-ui/react';

function RadioCard({
  imgPath,
  imgAlt,
  ...radioProps
}: {
  imgPath: string;
  imgAlt: string;
}) {
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);
  const input = getInputProps();

  return (
    <Box as="label">
      <input {...input} hidden />
      <Box
        {...getCheckboxProps()}
        w="4.7rem"
        opacity="0.2"
        _checked={{ opacity: '1' }}
        cursor="pointer"
      >
        <Image src={`/${imgPath}.png`} alt={`Image of ${imgAlt}`} />
      </Box>
    </Box>
  );
}

export default RadioCard;
