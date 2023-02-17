import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { GameResourcesService } from './game-resources.service';
import { CreateGameResourceDto } from './dto/create-game-resource.dto';
import { UpdateGameResourceDto } from './dto/update-game-resource.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('game-resources')
export class GameResourcesController {
  constructor(private readonly gameResourcesService: GameResourcesService) {}

  @Post()
  create(@Body() createGameResourceDto: CreateGameResourceDto) {
    return this.gameResourcesService.create(createGameResourceDto);
  }

  @Get()
  findAll(@Req() req) {
    const gameId = req.signedCookies['game'];
    return this.gameResourcesService.findAll(gameId);
  }

  @Get('/all')
  findResourcesUserGame() {
    return this.gameResourcesService.findResourcesUserGame();
  }

  @Get('/details/:id')
  findByUserId(@Param('id') id: string) {
    return this.gameResourcesService.findByUserId(+id);
  }

  @Get('/with-resources-used-and-produced')
  findAllWithResourcesUsedAndProduced(@Req() req) {
    const gameId = req.signedCookies['game'];
    return this.gameResourcesService.findAllWithResourcesUsedAndProduced(
      gameId,
    );
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
