import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesProducedController } from './resources-produced.controller';
import { ResourcesProducedService } from './resources-produced.service';

describe('ResourcesProducedController', () => {
  let controller: ResourcesProducedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourcesProducedController],
      providers: [ResourcesProducedService],
    }).compile();

    controller = module.get<ResourcesProducedController>(
      ResourcesProducedController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
