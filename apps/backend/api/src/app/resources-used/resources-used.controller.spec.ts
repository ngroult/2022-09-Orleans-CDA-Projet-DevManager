import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesUsedController } from './resources-used.controller';
import { ResourcesUsedService } from './resources-used.service';

describe('ResourcesUsedController', () => {
  let controller: ResourcesUsedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourcesUsedController],
      providers: [ResourcesUsedService],
    }).compile();

    controller = module.get<ResourcesUsedController>(ResourcesUsedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
