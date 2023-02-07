import { Game } from '@apps/backend-api';
import { Grid, useRadioGroup } from '@chakra-ui/react';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import fetchImages from '../utils/fetchImage';
import RadioCard from './RadioCard';

const GameImageFiller = ({
  pendingGameData,
  setPendingGameData,
  selectedImage,
  setSelectedImage,
}: {
  pendingGameData?: Partial<Game>;
  setPendingGameData?: Dispatch<SetStateAction<Partial<Game>>>;
  selectedImage?: string;
  setSelectedImage?: Dispatch<SetStateAction<string>>;
}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages('company');
      setImages(data);
    };
    getImages();
  }, []);

  const radioGroup = setPendingGameData
    ? {
        value: `${pendingGameData?.image?.id}`,
        onChange: (value: string) => {
          setPendingGameData((prev: Partial<Game>) => ({
            ...prev,
            image: { id: parseInt(value, 10) },
          }));
        },
      }
    : {
        value: `${selectedImage}`,
        onChange: (value: string) => {
          if (setSelectedImage) setSelectedImage(value);
        },
      };

  const { getRootProps, getRadioProps } = useRadioGroup(radioGroup);

  return (
    <Grid
      {...getRootProps()}
      templateColumns="repeat(3, 1fr)"
      m="2rem auto"
      gap="1rem"
      maxW="400px"
    >
      {images.map((image: { id: string; name: string }, index) => {
        const radioProps = getRadioProps({
          value: `${image.id}`,
        });
        return <RadioCard key={index} imageName={image.name} {...radioProps} />;
      })}
    </Grid>
  );
};

export default GameImageFiller;
