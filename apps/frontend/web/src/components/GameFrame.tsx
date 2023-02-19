import { useState } from 'react';
import { Stage } from '@pixi/react';
import * as PIXI from 'pixi.js';
import OpenSpace2D from './OpenSpace2D';
import Offices2D from './Offices2D';
import BreakRoom2D from './BreakRoom2D';

const GameFrame = () => {
  const [stageWidth, setStageWidth] = useState(900);
  const [stageHeight, setStageHeight] = useState(700);

  function handleResize() {
    setStageWidth(window.innerWidth);
    setStageHeight(window.innerHeight);
  }

  return (
    <div onResize={handleResize}>
      <Stage
        width={stageWidth}
        height={stageHeight}
        options={(PIXI.autoDetectRenderer, { backgroundColor: 0xefd8eb })}
      >
        <BreakRoom2D />
      </Stage>
    </div>
  );
};

export default GameFrame;
