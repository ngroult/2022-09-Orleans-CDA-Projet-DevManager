import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesUsedService } from './resources-used.service';

describe('ResourcesUsedService', () => {
  let service: ResourcesUsedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesUsedService],
    }).compile();

    service = module.get<ResourcesUsedService>(ResourcesUsedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
