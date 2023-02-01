import { Box, Image, Grid, useRadioGroup, useRadio } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import fetchImages from '../utils/fetchImage';
import RadioCard from './RadioCard';

const GameImageFiller = ({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string;
  setSelectedImage: (value: string) => void;
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: selectedImage,
    onChange: (value) => setSelectedImage(value),
  });
  const group = getRootProps();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesGet = async () => {
      const data = await fetchImages('game');
      setImages(data);
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
      {images.map((value: { name: string }, index) => {
        const radio = getRadioProps({ value: value.name });
        return <RadioCard key={index} {...radio} />;
      })}
    </Grid>
  );
};

export default GameImageFiller;
