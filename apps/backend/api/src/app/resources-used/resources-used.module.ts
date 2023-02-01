import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourcesUsedService } from './resources-used.service';
import { ResourcesUsedController } from './resources-used.controller';
import { ResourceUsed, Resource, Character } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceUsed, Resource, Character])],
  controllers: [ResourcesUsedController],
  providers: [ResourcesUsedService],
})
export class ResourcesUsedModule {}
