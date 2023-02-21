import { Game, Image } from '@apps/backend-api';
import { Grid, useRadioGroup } from '@chakra-ui/react';
import { DeepPartial } from '@libs/typings';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import fetchImages from '../utils/fetchImage';
import RadioCard from './RadioCard';

const GameImageFiller = ({
  pendingGameData,
  setPendingGameData,
  selectedImageId,
  setSelectedImageId,
}: {
  pendingGameData?: DeepPartial<Game>;
  setPendingGameData?: Dispatch<SetStateAction<DeepPartial<Game>>>;
  selectedImageId?: number;
  setSelectedImageId?: Dispatch<SetStateAction<number | undefined>>;
}) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages('company');
      setImages(data);
    };
    getImages();
  }, []);

  const radioGroup1 = {
    value: pendingGameData?.image?.id?.toString(),
    onChange: (value: string) => {
      if (setPendingGameData)
        setPendingGameData((prev: DeepPartial<Game>) => ({
          ...prev,
          image: { id: parseInt(value, 10) },
        }));
    },
  };

  const radioGroup2 = {
    value: selectedImageId?.toString(),
    onChange: (value: string) => {
      if (setSelectedImageId) setSelectedImageId(parseInt(value, 10));
    },
  };

  const { getRootProps, getRadioProps } = useRadioGroup(
    setPendingGameData ? radioGroup1 : radioGroup2
  );

  return (
    <Grid
      {...getRootProps()}
      templateColumns="repeat(3, 1fr)"
      m="2rem auto"
      maxW="400px"
      alignItems="center"
      justifyContent="center"
    >
      {images.map((image, index) => {
        const radioProps = getRadioProps({ value: image.id.toString() });

        return (
          <RadioCard
            key={index}
            imgPath={image.name}
            imgAlt={image.description}
            {...radioProps}
          />
        );
      })}
    </Grid>
  );
};

export default GameImageFiller;
