import { Game } from '@apps/backend-api';
import { Input, InputGroup, FormLabel } from '@chakra-ui/react';
import { DeepPartial } from '@libs/typings';
import { Dispatch, SetStateAction } from 'react';

const GameDetailsFiller = ({
  pendingGameData,
  setPendingGameData,
}: {
  pendingGameData: DeepPartial<Game>;
  setPendingGameData: Dispatch<SetStateAction<DeepPartial<Game>>>;
}) => {
  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="2rem 0 1rem 0"
      p="0 1.5rem"
    >
      <FormLabel
        htmlFor="company-name"
        textAlign="left"
        w="100%"
        maxW="400px"
        m="0"
      >
        {'Company name :'}
      </FormLabel>
      <Input
        id="company-name"
        maxW="400px"
        placeholder="My Company..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
        value={pendingGameData?.companyName}
        onChange={(e) =>
          setPendingGameData((prev: DeepPartial<Game>) => ({
            ...prev,
            companyName: e.target.value,
          }))
        }
      />
      <FormLabel
        htmlFor="ceo-name"
        textAlign="left"
        w="100%"
        maxW="400px"
        m="0.5rem 0 0"
      >
        {'CEO Name :'}
      </FormLabel>
      <Input
        id="ceo-name"
        maxW="400px"
        placeholder="Elon Musk..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
        value={pendingGameData?.ceo}
        onChange={(e) =>
          setPendingGameData((prev: DeepPartial<Game>) => ({
            ...prev,
            ceo: e.target.value,
          }))
        }
      />
      <FormLabel
        htmlFor="location"
        textAlign="left"
        w="100%"
        maxW="400px"
        m="0.5rem 0 0"
      >
        {'Location :'}
      </FormLabel>
      <Input
        id="location"
        maxW="400px"
        placeholder="Paris, France..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
        value={pendingGameData?.location}
        onChange={(e) =>
          setPendingGameData((prev: DeepPartial<Game>) => ({
            ...prev,
            location: e.target.value,
          }))
        }
      />
    </InputGroup>
  );
};

export default GameDetailsFiller;
