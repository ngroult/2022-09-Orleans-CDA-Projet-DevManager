import { PartialType } from '@nestjs/mapped-types';
import { CreateGameEventDto } from './create-game-event.dto';

export class UpdateGameEventDto extends PartialType(CreateGameEventDto) {}
