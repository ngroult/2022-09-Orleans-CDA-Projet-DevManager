import { Test, TestingModule } from '@nestjs/testing';
import { IsBonusMalusController } from './is-bonus-malus.controller';

describe('IsBonusMalusController', () => {
  let controller: IsBonusMalusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IsBonusMalusController],
    }).compile();

    controller = module.get<IsBonusMalusController>(IsBonusMalusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
