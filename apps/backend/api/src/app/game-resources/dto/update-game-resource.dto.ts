import { PartialType } from '@nestjs/mapped-types';
import { CreateGameResourceDto } from './create-game-resource.dto';

export class UpdateGameResourceDto extends PartialType(CreateGameResourceDto) {}
