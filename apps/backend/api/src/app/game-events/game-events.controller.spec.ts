import { Test, TestingModule } from '@nestjs/testing';
import { GameEventsController } from './game-events.controller';
import { GameEventsService } from './game-events.service';

describe('GameEventsController', () => {
  let controller: GameEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameEventsController],
      providers: [GameEventsService],
    }).compile();

    controller = module.get<GameEventsController>(GameEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
