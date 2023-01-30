import { Test, TestingModule } from '@nestjs/testing';
import { BonusMalusService } from './bonus-malus.service';

describe('BonusMalusService', () => {
  let service: BonusMalusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BonusMalusService],
    }).compile();

    service = module.get<BonusMalusService>(BonusMalusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
