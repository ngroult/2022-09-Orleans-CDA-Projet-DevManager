import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResourcesUsedService } from './resources-used.service';
import { CreateResourceUsedDto } from './dto/create-resource-used.dto';
import { UpdateResourceUsedDto } from './dto/update-resource-used.dto';

@Controller('resourcesUsed')
export class ResourcesUsedController {
  constructor(private readonly resourcesUsedService: ResourcesUsedService) {}

  @Post()
  create(@Body() createResourceUsedDto: CreateResourceUsedDto) {
    return this.resourcesUsedService.create(createResourceUsedDto);
  }

  @Get()
  findAll() {
    return this.resourcesUsedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourcesUsedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResourceUsedDto: UpdateResourceUsedDto,
  ) {
    return this.resourcesUsedService.update(+id, updateResourceUsedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourcesUsedService.remove(+id);
  }
}
