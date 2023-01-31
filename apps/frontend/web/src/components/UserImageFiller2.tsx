import { Box, Image, Grid, useRadioGroup, useRadio } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import fetchImages from '../utils/fetchImage';

const UserImageFiller = ({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string;
  setSelectedImage: (value: string) => void;
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup();
  const group = getRootProps();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesGet = async () => {
      const data = await fetchImages('profile');
      setImages(data);
      console.log('data', data);
    };
    imagesGet();
  }, []);

  return (
    <Grid
      {...group}
      templateColumns="repeat(3, 1fr)"
      m="2rem auto"
      gap="1rem"
      maxW="400px"
    >
      {images.map((image: { name: string }, index) => {
        const value = image.name;
        console.log('value', value);

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
