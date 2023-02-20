import { Container, Sprite, Stage } from '@pixi/react';
import MovingSprite from './MovingSprite';
import * as PIXI from 'pixi.js';

function BreakRoom2D(props) {
  return (
    <Stage
      width={900}
      height={700}
      color={props.color}
      options={(PIXI.autoDetectRenderer, { backgroundColor: props.color })}
    >
      <Sprite
        image="/nouvelles.png"
        width={100}
        height={100}
        x={150}
        y={60}
        anchor={0.5}
      />
      <Sprite
        image="/canape.png"
        width={200}
        height={200}
        x={150}
        y={250}
        anchor={0.5}
      />
      <Sprite
        image="/salle-a-manger.png"
        width={200}
        height={200}
        x={150}
        y={500}
        anchor={0.5}
      />
      <Sprite
        image="/distributeur-automatique.png"
        width={150}
        height={150}
        x={380}
        y={85}
        anchor={0.5}
      />
      <Sprite
        image="/distributeur-automatique(1).png"
        width={150}
        height={150}
        x={520}
        y={85}
        anchor={0.5}
      />
      <Sprite
        image="/salle-a-manger.png"
        width={200}
        height={200}
        x={750}
        y={85}
        anchor={0.5}
      />
      <Sprite
        image="/soccer-de-table.png"
        width={175}
        height={175}
        x={750}
        y={350}
        anchor={0.5}
      />
      <Sprite
        image="/billard.png"
        width={175}
        height={175}
        x={450}
        y={400}
        anchor={0.5}
      />
      <Sprite
        image="/tapis.png"
        width={160}
        height={160}
        x={450}
        y={670}
        anchor={0.5}
      />
      <Container>
        <MovingSprite character="/man1.png" />
        <MovingSprite character="/man1.png" />
        <MovingSprite character="/man1.png" />
        <MovingSprite character="/man1.png" />
        <MovingSprite character="/man1.png" />
      </Container>
    </Stage>
  );
}

export default BreakRoom2D;
