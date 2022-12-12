import { Box, Image, useRadio } from '@chakra-ui/react';

const CompanyImageRadioCard = ({isSelected, ...radioProps}) => {
  const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);

  return (
    <Box as="label">
      <input {...getInputProps()} />
      <Box
        {...getCheckboxProps()}
        w="75px"
        opacity={state.isChecked ? '1' : '0.2'}
        cursor="pointer"
      >
        <Image src="/images/default_img.jpg" alt="Default image" />
      </Box>
    </Box>
  );
};

export default CompanyImageRadioCard;
