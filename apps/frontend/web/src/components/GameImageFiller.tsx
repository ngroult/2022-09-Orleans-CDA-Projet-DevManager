import { Box, Image, Grid, useRadioGroup, useRadio } from '@chakra-ui/react';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import fetchImages from '../utils/fetchImage';
import RadioCard from './RadioCard';

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
  const [images, setImages] = useState([]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: selectedImage,
    onChange: (value) => {
      setSelectedImage(value);
      console.log(selectedImage);
    },
  });
  const group = getRootProps();

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages('company');
      setImages(data);
    };
    getImages();
  }, []);

  return (
    <Grid
      {...group}
      templateColumns="repeat(3, 1fr)"
      m="2rem auto"
      gap="1rem"
      maxW="400px"
    >
      {images.map((image: { id: string; name: string }, index) => {
        const radioProps = getRadioProps({
          value: image.id,
        });
        return (
          <RadioCard
            key={index}
            imageName={image.name}
            setSelectedImage={setSelectedImage}
            {...radioProps}
          />
        );
      })}
    </Grid>
  );
};

export default GameImageFiller;
