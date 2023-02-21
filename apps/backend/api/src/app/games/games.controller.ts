import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  Res,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('games')
export class GamesController {
  constructor(
    private readonly gamesService: GamesService,
    private readonly configService: ConfigService,
  ) {}

  @Get('id')
  async gameId(@Res({ passthrough: true }) response: Response, @Req() req) {
    const NODE_ENV = this.configService.get('NODE_ENV') || 'development';
    const game = await this.gamesService.findOneByUser(req.user.id);

    response.cookie('game', game.id, {
      httpOnly: true,
      sameSite: true,
      secure: NODE_ENV === 'production',
      signed: true,
    });
    return { status: 'OK' };
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id);
  }
  @Get('/user/:id')
  findOneByUser(@Param('id') id: string) {
    return this.gamesService.findOneByUser(+id);
  }

  @Get('/verify/:id')
  async verifyGame(@Param('id') id: string) {
    const count = await this.gamesService.verifyGame(+id);
    return { count };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(+id, updateGameDto);
  }

  @Post('take-check')
  takeCheck(@Req() req) {
    const gameId = req.signedCookies['game'];
    return this.gamesService.takeCheck(gameId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }
}
