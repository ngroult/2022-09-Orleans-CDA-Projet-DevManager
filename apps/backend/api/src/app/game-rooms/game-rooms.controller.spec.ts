import { Test, TestingModule } from '@nestjs/testing';
import { GameRoomsController } from './game-rooms.controller';
import { GameRoomsService } from './game-rooms.service';

describe('GameRoomsController', () => {
  let controller: GameRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameRoomsController],
      providers: [GameRoomsService],
    }).compile();

    controller = module.get<GameRoomsController>(GameRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
