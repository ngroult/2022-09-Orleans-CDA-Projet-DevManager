import { Box, Image, useRadio } from '@chakra-ui/react';
import { useEffect } from 'react';

const CompanyImageRadioCard = ({
  selectedImage,
  setSelectedImage,
  ...radioProps
}: {
  selectedImage: string;
  setSelectedImage: (value: string) => void;
}) => {
  const {
    state,
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps,
    htmlProps,
  } = useRadio(radioProps);

  useEffect(() => {
    console.log({
      'state =': state,
      'getInputProps =': getInputProps(),
      'getCheckboxProps =': getCheckboxProps(),
      'getLabelProps =': getLabelProps(),
      'getRootProps =': getRootProps(),
      'htmlProps =': htmlProps,
    });
  }, []);

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
          src={`/images/company${getInputProps().value}.png`}
          alt={`Image of the company ${getInputProps().value}`}
          onClick={() => setSelectedImage(getInputProps().value)}
        />
      </Box>
    </Box>
  );
};

export default CompanyImageRadioCard;
