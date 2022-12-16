import { Box, Image, useRadio } from '@chakra-ui/react';

const CompanyImageRadioCard = ({
  selectedImage,
  setSelectedImage,
  ...radioProps
}: {
  selectedImage: string;
  setSelectedImage: (value: string) => void;
}) => {
  const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);

  return (
    <Box as="label">
      <input {...getInputProps()} hidden />
      <Box
        {...getCheckboxProps()}
        w="75px"
        opacity={state.isChecked ? '1' : '0.2'}
        cursor="pointer"
      >
        <Image
          src={`/company${getInputProps().value}.png`}
          alt={`Image of the company ${getInputProps().value}`}
          onClick={() => setSelectedImage(getInputProps().value)}
        />
      </Box>
    </Box>
  );
};

export default CompanyImageRadioCard;
