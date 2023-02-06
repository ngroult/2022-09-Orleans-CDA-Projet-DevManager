import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Image, User } from 'src/entities';

export class CreateGameDto {
  @IsString()
  companyName: string;

  @IsString()
  ceo: string;

  @IsString()
  location: string;

  @ValidateNested()
  @Type(() => Image)
  image: Image;

  @ValidateNested()
  @Type(() => User)
  user: User;
}
