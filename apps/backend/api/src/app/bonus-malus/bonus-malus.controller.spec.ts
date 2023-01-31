import { Test, TestingModule } from '@nestjs/testing';
import { BonusMalusController } from './bonus-malus.controller';

describe('BonusMalusController', () => {
  let controller: BonusMalusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BonusMalusController],
    }).compile();

    controller = module.get<BonusMalusController>(BonusMalusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
