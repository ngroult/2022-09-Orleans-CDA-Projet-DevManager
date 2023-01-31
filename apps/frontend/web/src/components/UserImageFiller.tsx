import { Box, Image, Grid, useRadioGroup, useRadio } from '@chakra-ui/react';
import { useEffect } from 'react';

const UserImageFiller = ({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string;
  setSelectedImage: (value: string) => void;
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup();
  const group = getRootProps();

  useEffect;

  const options = [
    'man1',
    'man2',
    'man3',
    'man4',
    'man5',
    'man6',
    'man7',
    'man8',
    'man9',
    'man10',
    'woman1',
    'woman2',
    'woman3',
    'woman4',
    'woman5',
    'woman6',
    'woman7',
    'woman8',
    'woman9',
    'woman10',
  ];

  return (
    <Grid
      {...group}
      templateColumns="repeat(3, 1fr)"
      m="2rem auto"
      gap="1rem"
      maxW="400px"
    >
      {options.map((value, index) => {
        const radioProps = getRadioProps({ value });
        const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);
        return (
          <Box as="label" key={index}>
            <input {...getInputProps()} hidden />
            <Box
              {...getCheckboxProps()}
              w="4.7rem"
              opacity={
                selectedImage === getInputProps().value
                  ? '1'
                  : state.isChecked
                  ? '1'
                  : '0.2'
              }
              cursor="pointer"
            >
              <Image
                src={`/${getInputProps().value}.png`}
                alt={`Image of ${getInputProps().value}`}
                onClick={() => setSelectedImage(getInputProps().value)}
              />
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
};

export default UserImageFiller;
