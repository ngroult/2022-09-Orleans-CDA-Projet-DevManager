import { Module } from '@nestjs/common';
import { ForgeService } from './forge.service';
import { ForgeController } from './forge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Game,
  User,
  Room,
  Character,
  Resource,
  GameResource,
  GameRoom,
  GameCharacter,
  Event,
  IsBonusMalus,
  GameEvent,
} from '../../entities';
import {

@Module({
  imports: [
    
    TypeOrmModule.forFeature([   
      Game,  
      User,
      Room,
      Character,
      Resource,
      GameResource,
      GameRoom,
      GameCharacter,
      Event,
      IsBonusMalus,
      GameEvent,
    ]),
  ,
  ],
  controllers: [ForgeController],
  providers: [ForgeService],
})
export class ForgeModule {}
