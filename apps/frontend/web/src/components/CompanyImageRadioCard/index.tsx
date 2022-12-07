import { Box, Image, useRadio } from '@chakra-ui/react';

const CompanyImageRadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        w="75px"
        border=".25rem solid #aaaaaa"
        cursor="pointer"
        _checked={{
          borderColor: '#B03D99',
        }}
      >
        <Image
          src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-square-1-768x768.jpg"
          alt="Company image"
        />
      </Box>
    </Box>
  );
};

export default CompanyImageRadioCard;
