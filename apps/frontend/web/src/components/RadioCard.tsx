import { Box, Flex, Image, useRadio } from '@chakra-ui/react';

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
    <Flex as="label" alignContent="center" justifyContent="center">
      <input {...input} hidden />
      <Box
        {...getCheckboxProps()}
        w="calc(4.7rem - 0.8rem)"
        m="0.4rem"
        opacity="0.2"
        _checked={{ opacity: '1' }}
        cursor="pointer"
      >
        <Image src={`/${imgPath}.png`} alt={`Image of ${imgAlt}`} />
      </Box>
    </Flex>
  );
}

export default RadioCard;
