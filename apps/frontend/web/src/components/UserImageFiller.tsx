import { useState } from 'react';
import { Box, Image, Grid, useRadioGroup, useRadio } from '@chakra-ui/react';

const UserImageFiller = () => {
  const [selectedImage, setSelectedImage] = useState('1');

  const { getRootProps, getRadioProps } = useRadioGroup();
  const group = getRootProps();

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
    <Grid {...group} templateColumns="repeat(3, 1fr)" m="2rem 0" gap="1rem">
      {options.map((value, index) => {
        const radioProps = getRadioProps({ value });
        const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);
        return (
          <Box as="label" key={index}>
            <input {...getInputProps()} hidden />
            <Box
              {...getCheckboxProps()}
              w="75px"
              opacity={state.isChecked ? '1' : '0.2'}
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
