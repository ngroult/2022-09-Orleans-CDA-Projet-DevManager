import { User } from '@apps/backend-api';
import { Grid, useRadioGroup } from '@chakra-ui/react';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import fetchImages from '../utils/fetchImage';
import RadioCard from './RadioCard';

const UserImageFiller = ({
  pendingUserData,
  setPendingUserData,
}: {
  pendingUserData: Partial<User>;
  setPendingUserData: Dispatch<SetStateAction<Partial<User>>>;
}) => {
  const [images, setImages] = useState([]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    value: pendingUserData?.image?.id.toString(),
    onChange: (value: string) =>
      setPendingUserData((prev: Partial<User>) => ({
        ...prev,
        image: { id: parseInt(value, 10) },
      })),
  });

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages('profile');
      setImages(data);
    };
    getImages();
  }, []);

  return (
    <Grid
      {...getRootProps()}
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
      {images.map(
        (image: { id: number; name: string; description: string }, index) => {
          const radioProps = getRadioProps({ value: image.id.toString() });
          return (
            <RadioCard
              key={index}
              imgPath={image.name}
              imgAlt={image.description}
              {...radioProps}
            />
          );
        }
      )}
    </Grid>
  );
};

export default UserImageFiller;