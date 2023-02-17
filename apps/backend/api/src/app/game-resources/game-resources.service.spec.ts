import { Test, TestingModule } from '@nestjs/testing';
import { GameResourcesService } from './game-resources.service';

describe('GameResourcesService', () => {
  let service: GameResourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameResourcesService],
    }).compile();

    service = module.get<GameResourcesService>(GameResourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
