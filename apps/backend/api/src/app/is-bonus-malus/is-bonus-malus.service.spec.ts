import { Test, TestingModule } from '@nestjs/testing';
import { IsBonusMalusService } from './is-bonus-malus.service';

describe('IsBonusMalusService', () => {
  let service: IsBonusMalusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsBonusMalusService],
    }).compile();

    service = module.get<IsBonusMalusService>(IsBonusMalusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
