import { Container, Sprite, Stage } from '@pixi/react';
import MovingSprite from './MovingSprite';
import * as PIXI from 'pixi.js';

function OpenSpace2D(props: { color: string }) {
  return (
    <Stage
      width={900}
      height={700}
      options={(PIXI.autoDetectRenderer, { backgroundColor: props.color })}
    >
      <Sprite
        image="/dual_screen.png"
        width={100}
        height={100}
        x={500}
        y={300}
        anchor={0.5}
      />
      <Sprite
        image="/dual_screen.png"
        width={100}
        height={100}
        x={100}
        y={300}
        anchor={0.5}
      />
      <Sprite
        image="/dual_screen.png"
        width={100}
        height={100}
        x={300}
        y={300}
        anchor={0.5}
      />
      <Sprite
        image="/dual_screen.png"
        width={100}
        height={100}
        x={700}
        y={500}
        anchor={0.5}
      />
      <Sprite
        image="/desk-no-bg.png"
        width={100}
        height={100}
        x={500}
        y={500}
        anchor={0.5}
      />
      <Sprite
        image="/desk-no-bg.png"
        width={100}
        height={100}
        x={100}
        y={500}
        anchor={0.5}
      />
      <Sprite
        image="/desk-no-bg.png"
        width={100}
        height={100}
        x={300}
        y={500}
        anchor={0.5}
      />
      <Sprite
        image="/desk-no-bg.png"
        width={100}
        height={100}
        x={700}
        y={300}
        anchor={0.5}
      />
      <Sprite
        image="/drink.png"
        width={150}
        height={150}
        x={85}
        y={85}
        anchor={0.5}
      />
      <Sprite
        image="/chocolate.png"
        width={150}
        height={150}
        x={250}
        y={85}
        anchor={0.5}
      />
      <Sprite
        image="/lunch.png"
        width={200}
        height={200}
        x={750}
        y={85}
        anchor={0.5}
      />
      <Sprite
        image="/carpet.png"
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

export default OpenSpace2D;
