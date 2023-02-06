import { Game } from '@apps/backend-api';
import { Box, Image, Grid, useRadioGroup, useRadio } from '@chakra-ui/react';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import fetchImages from '../utils/fetchImage';
import RadioCard from './RadioCard';

type Props = {
  pendingGameData: Game;
  setPendingGameData: (value: Game) => void;
};

const GameImageFiller = ({ pendingGameData, setPendingGameData }: Props) => {
  const [images, setImages] = useState([]);
  const { getRootProps, getRadioProps } = useRadioGroup();

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages('company');
      setImages(data);
    };
    getImages();
  }, []);

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
          value: image.id,
        });
        return (
          <RadioCard
            key={index}
            imageName={image.name}
            setPendingGameData={setPendingGameData}
            {...radioProps}
          />
        );
      })}
    </Grid>
  );
};

export default GameImageFiller;
