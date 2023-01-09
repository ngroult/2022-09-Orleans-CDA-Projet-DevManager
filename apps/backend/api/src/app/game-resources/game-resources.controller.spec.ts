import { Test, TestingModule } from '@nestjs/testing';
import { GameResourcesController } from './game-resources.controller';
import { GameResourcesService } from './game-resources.service';

describe('GameResourcesController', () => {
  let controller: GameResourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameResourcesController],
      providers: [GameResourcesService],
    }).compile();

    controller = module.get<GameResourcesController>(GameResourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
