import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourcesProducedService } from './resources-produced.service';
import { ResourcesProducedController } from './resources-produced.controller';
import { ResourceProduced, Resource, Character } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceProduced, Resource, Character])],
  controllers: [ResourcesProducedController],
  providers: [ResourcesProducedService],
})
export class ResourcesProducedModule {}
