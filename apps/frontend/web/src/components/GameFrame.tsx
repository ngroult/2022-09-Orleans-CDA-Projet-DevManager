import { useContext, useEffect, useState } from 'react';
import { Stage } from '@pixi/react';
import * as PIXI from 'pixi.js';
import OpenSpace2D from './OpenSpace2D';
import Offices2D from './Offices2D';
import BreakRoom2D from './BreakRoom2D';
import GameContext from '../contexts/GameContext';
import { background, Box } from '@chakra-ui/react';

const GameFrame = () => {
  const [roomOptions, setRoomOptions] = useState({});

  const { gameRoom } = useContext(GameContext);

  useEffect(() => {
    if (gameRoom?.room.label === 'open-space') {
      setRoomOptions({
        component: <OpenSpace2D color={0xefd8eb} />,
        color: 0xefd8eb,
      });
    } else if (gameRoom?.room.label === 'offices') {
      setRoomOptions({
        component: <Offices2D color={0xd9f1f0} />,
        color: 0xd9f1f0,
      });
    } else if (gameRoom?.room.label === 'break-room') {
      setRoomOptions({
        component: <BreakRoom2D color={0xf7f0d0} />,
        color: 0xf7f0d0,
      });
    }
  }, [gameRoom]);

  if (roomOptions.color !== undefined) {
    return (
      <Box display={{ base: 'none', xl: 'block' }}>{roomOptions.component}</Box>
    );
  }
};

export default GameFrame;
