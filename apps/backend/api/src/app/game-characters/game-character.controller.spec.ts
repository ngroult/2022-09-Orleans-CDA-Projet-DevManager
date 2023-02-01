import { Test, TestingModule } from '@nestjs/testing';
import { GameCharactersController } from './game-characters.controller';
import { GameCharactersService } from './game-characters.service';

describe('GameCharactersController', () => {
  let controller: GameCharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameCharactersController],
      providers: [GameCharactersService],
    }).compile();

    controller = module.get<GameCharactersController>(GameCharactersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
