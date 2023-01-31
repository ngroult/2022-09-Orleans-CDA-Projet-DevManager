import { Box, Image, Grid, useRadioGroup, useRadio } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

const GameImageFiller = ({
  selectedImage,
  setSelectedImage,
  setFormData,
}: {
  selectedImage: string;
  setSelectedImage: (value: string) => void;
  setFormData: Dispatch<
    SetStateAction<{
      [key: string]: string;
    }>
  >;
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup();
  const group = getRootProps();

  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

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
            <input
              {...getInputProps()}
              hidden
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, idImage: e.target.value }))
              }
            />
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
                src={`/company${getInputProps().value}.png`}
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

export default GameImageFiller;
