import { Box, Image, Grid, useRadioGroup, useRadio } from '@chakra-ui/react';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import fetchImages from '../utils/fetchImage';
import RadioCard from './RadioCard';

const UserImageFiller = ({
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
  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: selectedImage,
    onChange: (value) => setSelectedImage(value),
  });
  const group = getRootProps();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesGet = async () => {
      const data = await fetchImages('profile');
      setImages(data);
    };
    imagesGet();
  }, []);

  return (
    <Grid
      {...group}
      templateColumns={{
        base: 'repeat(3, 1fr)',
        xl: 'repeat(5, 1fr)',
        lg: 'repeat(5, 1fr)',
        md: 'repeat(5, 1fr)',
      }}
      m="2rem auto"
      gap="1rem"
      maxW="400px"
    >
      {images.map((value: { name: string }, index) => {
        const radio = getRadioProps({ value: value.name });
        return <RadioCard key={index} {...radio} />;
      })}
    </Grid>
  );
};

export default UserImageFiller;
