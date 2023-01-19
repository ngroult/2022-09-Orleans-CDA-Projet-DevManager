import { Box, Center, Image, Text } from '@chakra-ui/react';

const Page404 = () => {
  return (
    <Box>
      <Center>
        <Image
          src="/404.jpg"
          alt="Dev dort"
          w={{ base: '60%', sm: '60%', md: '80%', lg: '60%' }}
          borderRadius="10"
          mt="10"
        />
      </Center>
      <Center>
        <Text fontSize="3xl" mt="20" p="5">
          {"Oups, c'est la salle 404! C'est rien c'est juste le stagaire!"}
        </Text>
      </Center>
    </Box>
  );
};

export default Page404;
