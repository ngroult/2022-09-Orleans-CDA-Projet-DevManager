import { Test, TestingModule } from '@nestjs/testing';
import { ForgeController } from './forge.controller';
import { ForgeService } from './forge.service';

describe('GamesController', () => {
  let controller: ForgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForgeController],
      providers: [ForgeService],
    }).compile();

    controller = module.get<ForgeController>(ForgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
