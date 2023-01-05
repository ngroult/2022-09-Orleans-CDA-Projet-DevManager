import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameResourcesService } from './game-resources.service';
import { CreateGameResourceDto } from './dto/create-game-resource.dto';
import { UpdateGameResourceDto } from './dto/update-game-resource.dto';

@Controller('game-resources')
export class GameResourcesController {
  constructor(private readonly gameResourcesService: GameResourcesService) {}

  @Post()
  create(@Body() createGameResourceDto: CreateGameResourceDto) {
    return this.gameResourcesService.create(createGameResourceDto);
  }

  @Get()
  findAll() {
    return this.gameResourcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameResourcesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGameResourceDto: UpdateGameResourceDto,
  ) {
    return this.gameResourcesService.update(+id, updateGameResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameResourcesService.remove(+id);
  }
}
