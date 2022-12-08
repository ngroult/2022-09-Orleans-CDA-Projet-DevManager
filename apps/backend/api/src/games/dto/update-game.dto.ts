import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
    companyName: string;
    ceo: string;
    location: string;
    idImage: number;
}
