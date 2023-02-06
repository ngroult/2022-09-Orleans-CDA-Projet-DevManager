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
import { GameCharactersService } from './game-characters.service';
import { CreateGameCharacterDto } from './dto/create-game-character.dto';
import { UpdateGameCharacterDto } from './dto/update-game-character.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('game-characters')
export class GameCharactersController {
  constructor(private readonly gameCharactersService: GameCharactersService) {}

  @Post()
  create(@Body() createGameCharacterDto: CreateGameCharacterDto) {
    return this.gameCharactersService.create(createGameCharacterDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req) {
    const gameId = req.signedCookies['game'];
    return this.gameCharactersService.findAll(gameId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    const gameId = req.signedCookies['game'];
    return this.gameCharactersService.findOne(+id, gameId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGameCharacterDto: UpdateGameCharacterDto,
  ) {
    return this.gameCharactersService.update(+id, updateGameCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameCharactersService.remove(+id);
  }
}
