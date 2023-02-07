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
import { GameRoomsService } from './game-rooms.service';
import { CreateGameRoomDto } from './dto/create-game-room.dto';
import { UpdateGameRoomDto } from './dto/update-game-room.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('game-rooms')
export class GameRoomsController {
  constructor(private readonly gameRoomsService: GameRoomsService) {}

  @Post()
  create(@Body() createGameRoomDto: CreateGameRoomDto) {
    return this.gameRoomsService.create(createGameRoomDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req) {
    const gameId = req.signedCookies['game'];
    return this.gameRoomsService.findAll(gameId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameRoomsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('by-label/:label')
  findOneByLabel(@Param('label') label: string, @Req() req) {
    const gameId = req.signedCookies['game'];
    return this.gameRoomsService.findOneByLabel(label, gameId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGameRoomDto: UpdateGameRoomDto,
  ) {
    return this.gameRoomsService.update(+id, updateGameRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameRoomsService.remove(+id);
  }
}
