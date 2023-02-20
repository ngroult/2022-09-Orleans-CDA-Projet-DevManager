import { useContext, useEffect, useState } from 'react';
import OpenSpace2D from './OpenSpace2D';
import Offices2D from './Offices2D';
import BreakRoom2D from './BreakRoom2D';
import GameContext from '../contexts/GameContext';
import { Box } from '@chakra-ui/react';

const GameFrame = () => {
  const [roomOptions, setRoomOptions] = useState({ component: <></> });

  const { gameRoom } = useContext(GameContext);

  useEffect(() => {
    if (gameRoom?.room.label === 'open-space') {
      setRoomOptions({
        component: <OpenSpace2D color="0xefd8eb" />,
      });
    } else if (gameRoom?.room.label === 'offices') {
      setRoomOptions({
        component: <Offices2D color="0xd9f1f0" />,
      });
    } else if (gameRoom?.room.label === 'break-room') {
      setRoomOptions({
        component: <BreakRoom2D color="0xf7f0d0" />,
      });
    }
  }, [gameRoom]);

  return (
    <Box display={{ base: 'none', '2xl': 'block' }}>
      {roomOptions.component}
    </Box>
  );
};

export default GameFrame;
