import { Container, Sprite } from '@pixi/react';
import MovingSprite from './MovingSprite';

function Offices2D() {
  return (
    <>
      <Sprite
        image="/bureau.png"
        width={100}
        height={100}
        x={500}
        y={300}
        anchor={0.5}
      />
      <Sprite
        image="/bureau.png"
        width={100}
        height={100}
        x={100}
        y={300}
        anchor={0.5}
      />
      <Sprite
        image="/bureau.png"
        width={100}
        height={100}
        x={300}
        y={300}
        anchor={0.5}
      />
      <Sprite
        image="/bureau.png"
        width={100}
        height={100}
        x={700}
        y={500}
        anchor={0.5}
      />
      <Sprite
        image="/bureau(1).png"
        width={100}
        height={100}
        x={500}
        y={500}
        anchor={0.5}
      />
      <Sprite
        image="/bureau(1).png"
        width={100}
        height={100}
        x={100}
        y={500}
        anchor={0.5}
      />
      <Sprite
        image="/bureau(1).png"
        width={100}
        height={100}
        x={300}
        y={500}
        anchor={0.5}
      />
      <Sprite
        image="/bureau(1).png"
        width={100}
        height={100}
        x={700}
        y={300}
        anchor={0.5}
      />
      <Sprite
        image="/distributeur-automatique.png"
        width={150}
        height={150}
        x={85}
        y={85}
        anchor={0.5}
      />
      <Sprite
        image="/distributeur-automatique(1).png"
        width={150}
        height={150}
        x={250}
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
        image="/tapis.png"
        width={160}
        height={160}
        x={450}
        y={670}
        anchor={0.5}
      />
      <Container>
        <MovingSprite />
        <MovingSprite />
        <MovingSprite />
        <MovingSprite />
        <MovingSprite />
      </Container>
    </>
  );
}

export default Offices2D;
