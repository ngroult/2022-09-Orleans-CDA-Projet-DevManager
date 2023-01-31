import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameEventsService } from './game-events.service';
import { CreateGameEventDto } from './dto/create-game-event.dto';
import { UpdateGameEventDto } from './dto/update-game-event.dto';

@Controller('game-events')
export class GameEventsController {
  constructor(private readonly gameEventsService: GameEventsService) {}

  @Post()
  create(@Body() createGameEventDto: CreateGameEventDto) {
    return this.gameEventsService.create(createGameEventDto);
  }

  @Get()
  findAll() {
    return this.gameEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameEventsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGameEventDto: UpdateGameEventDto,
  ) {
    return this.gameEventsService.update(+id, updateGameEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameEventsService.remove(+id);
  }
}
