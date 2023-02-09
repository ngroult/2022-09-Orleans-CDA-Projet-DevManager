import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';
import {
  Box,
  Flex,
  VStack,
  Image,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
  GameRoom,
  GameCharacter,
  GameEvent,
  GameResource,
} from '@apps/backend-api';
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import EventCard from '../components/EventCard';
import AddCharacterModal from '../components/popups/AddCharacterModal';

const RoomPage = () => {
  const [gameCharacters, setGameCharacters] = useState<GameCharacter[]>([]);
  const [gameRoom, setGameRoom] = useState<GameRoom>();
  const [gameEvents, setGameEvents] = useState<GameEvent[]>([]);
  const [quantityAddCharacters, setQuantityAddCharacters] = useState(1);
  const { label } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gameResources, setGameResources] = useState<GameResource[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const handleRoom = async () => {
      try {
        const res = await fetch(`/api/game-rooms/by-label/${label}`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameRoom(jsonResponse);
      } catch {}
    };
    handleRoom();

    return () => {
      abortController.abort();
    };
  }, [label]);

  useEffect(() => {
    const abortController = new AbortController();

    const handleCharacters = async () => {
      try {
        const res = await fetch(`/api/game-characters`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameCharacters(jsonResponse);
      } catch {}
    };
    handleCharacters();

    const handleEvents = async () => {
      try {
        const res = await fetch(`/api/game-events`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameEvents(jsonResponse);
      } catch {}
    };
    handleEvents();

    const handleResources = async () => {
      try {
        const res = await fetch(`/api/game-resources`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setGameResources(jsonResponse);
      } catch {}
    };
    handleResources();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Box>
        <ResourcesBar />
        <Navbar />
        <NavbarRooms />
        <Flex pt="80px" px="80px" justifyContent="space-between">
          <Box
            boxSize="100%"
            display={{ base: 'none', lg: 'flex', md: 'column', sm: 'none' }}
          >
            <Image src="/overview.jpg" alt="overview" />
          </Box>
          {gameRoom && gameEvents && gameCharacters && (
            <Box bgColor={`${gameRoom.room.color}.200`} p="50px">
              <Button
                bgColor={`${gameRoom.room.color}.900`}
                color="white"
                boxShadow="2xl"
                onClick={onOpen}
                display="flex"
                justifyContent="end"
              >
                {`+ ${quantityAddCharacters}`}
              </Button>
              <VStack>
                {gameCharacters
                  .filter(
                    (gameCharacter) =>
                      gameRoom.room.id === gameCharacter.character.room.id
                  )
                  .map((gameCharacter) => (
                    <CharacterCard
                      key={gameCharacter.character.id}
                      gameCharacter={gameCharacter}
                      gameRoom={gameRoom}
                      quantityAddCharacters={quantityAddCharacters}
                      gameResources={gameResources}
                    />
                  ))}
                {gameEvents
                  .filter(
                    (gameEvent) => gameRoom.room.id === gameEvent.event.room.id
                  )
                  .map((gameEvent) => (
                    <EventCard
                      key={gameEvent.id}
                      gameEvent={gameEvent}
                      gameRoom={gameRoom}
                    />
                  ))}
              </VStack>
            </Box>
          )}
        </Flex>
      </Box>
      {gameRoom && (
        <AddCharacterModal
          isOpen={isOpen}
          onClose={onClose}
          quantityAddCharacters={quantityAddCharacters}
          setQuantityAddCharacters={setQuantityAddCharacters}
          color={gameRoom.room.color}
        />
      )}
    </>
  );
};

export default RoomPage;
