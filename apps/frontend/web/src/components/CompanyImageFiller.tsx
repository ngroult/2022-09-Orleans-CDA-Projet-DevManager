import { Box, Image, useRadio, useRadioGroup, Grid } from '@chakra-ui/react';

const CompanyImageFiller = ({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string;
  setSelectedImage: (value: string) => void;
}) => {
  const { getRootProps, getRadioProps, setValue } = useRadioGroup();
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
            <input {...getInputProps()} hidden />
            <Box
              {...getCheckboxProps()}
              w="75px"
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

export default CompanyImageFiller;
