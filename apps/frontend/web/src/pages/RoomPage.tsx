import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';
import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  VStack,
  Button,
  useDisclosure,
  Text,
  IconButton,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Room, Character } from '@apps/backend-api';
import { useParams } from 'react-router-dom';

const RoomPage = () => {
  // const [characters, setCharacters] = useState<Character[]>([]);
  const { label } = useParams();
  const [thisRoom, setThisRoom] = useState<Room[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`/api/rooms/by-label/${label}`, {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => {
        setThisRoom(data[0]);
        console.log(data[0]);
      });
    console.log('thisRoom: ' + thisRoom);
    return () => {
      abortController.abort();
    };
  }, [label]);

  return (
    <>
      <ResourcesBar />
      <Navbar />
      <NavbarRooms />
      <Flex minWidth="max-content" px="80px">
        {/* <Heading>{thisRoom.nsrc/is-bonus-malus/is-bonus-malus.controller.tssrc/is-bonus-malus/is-bonus-malus.controller.tsame}</Heading> */}
      </Flex>
    </>
  );
};

export default RoomPage;
