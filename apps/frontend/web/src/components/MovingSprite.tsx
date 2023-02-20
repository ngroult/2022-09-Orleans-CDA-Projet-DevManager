import { Container, render, Sprite, Stage, useTick } from '@pixi/react';
import { useState } from 'react';

let i = 0;

const MovingSprite = (props) => {
  // states
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [speed, setSpeed] = useState(0.01);
  const [target, setTarget] = useState({
    x: Math.random() * 800,
    y: Math.random() * 600,
  });
  const [targetLocked, setTargetLocked] = useState(false);

  // tick
  useTick((delta) => {
    setX((target.x - x) * (speed * delta) + x);
    setY((target.y - y) * (speed * delta) + y);

    if (Math.abs(target.x - x) + Math.abs(target.y - y) < 10) {
      if (!targetLocked) {
        setTargetLocked(true);
        setTimeout(() => {
          setTarget({ x: Math.random() * 900, y: Math.random() * 700 });
          setTargetLocked(false);
        }, Math.random() * 10000);
      }
    }
  });

  return (
    <Sprite
      image={props.character}
      anchor={0.5}
      x={x}
      y={y}
      width={100}
      height={100}
    />
  );
};

export default MovingSprite;
