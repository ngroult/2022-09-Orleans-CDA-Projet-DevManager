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
import { Room, GameCharacter, Event, GameResource } from '@apps/backend-api';
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import EventCard from '../components/EventCard';
import AddCharacterModal from '../components/popups/AddCharacterModal';

const RoomPage = () => {
  const [characters, setCharacters] = useState<GameCharacter[]>([]);
  const [thisRoom, setThisRoom] = useState<Room>();
  const [events, setEvents] = useState<Event[]>([]);
  const [quantityAddCharacters, setQuantityAddCharacters] = useState(1);
  const { label } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gameResources, setGameResources] = useState<GameResource[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const handleRoom = async () => {
      try {
        const res = await fetch(`/api/rooms/by-label/${label}`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setThisRoom(jsonResponse[0]);
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
        setCharacters(jsonResponse);
      } catch {}
    };
    handleCharacters();

    const handleEvents = async () => {
      try {
        const res = await fetch(`/api/events`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setEvents(jsonResponse);
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
          {thisRoom && events && characters && (
            <Box bgColor={`${thisRoom.color}.200`} p="50px">
              <Button
                bgColor={`${thisRoom.color}.900`}
                color="white"
                boxShadow="2xl"
                onClick={onOpen}
                display="flex"
                justifyContent="end"
              >
                {`+ ${quantityAddCharacters}`}
              </Button>
              <VStack>
                {characters
                  .filter(
                    (gameCharacter) =>
                      thisRoom.id === gameCharacter.character.room.id
                  )
                  .map((gameCharacter) => (
                    <CharacterCard
                      key={gameCharacter.character.id}
                      gameCharacter={gameCharacter}
                      room={thisRoom}
                      quantityAddCharacters={quantityAddCharacters}
                      gameResources={gameResources}
                    />
                  ))}
                {events
                  .filter((event) => thisRoom.id === event.room.id)
                  .map((event) => (
                    <EventCard key={event.id} event={event} room={thisRoom} />
                  ))}
              </VStack>
            </Box>
          )}
        </Flex>
      </Box>
      {thisRoom && (
        <AddCharacterModal
          isOpen={isOpen}
          onClose={onClose}
          quantityAddCharacters={quantityAddCharacters}
          setQuantityAddCharacters={setQuantityAddCharacters}
          color={thisRoom.color}
        />
      )}
    </>
  );
};

export default RoomPage;
