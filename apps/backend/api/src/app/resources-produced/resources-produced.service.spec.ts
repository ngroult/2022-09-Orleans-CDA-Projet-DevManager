import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesProducedService } from './resources-produced.service';

describe('ResourcesProducedService', () => {
  let service: ResourcesProducedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesProducedService],
    }).compile();

    service = module.get<ResourcesProducedService>(ResourcesProducedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
