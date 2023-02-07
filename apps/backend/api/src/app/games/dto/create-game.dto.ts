import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, Length, ValidateNested } from 'class-validator';
import { Image, User } from 'src/entities';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 30, {
    message: 'The company name must be between 3 and 30 characters length',
  })
  companyName: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30, {
    message: 'The CEO name must be between 3 and 30 characters length',
  })
  ceo: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30, {
    message: 'The location must be between 3 and 30 characters length',
  })
  location: string;

  @ValidateNested()
  @Type(() => Image)
  image: Image;

  @ValidateNested()
  @Type(() => User)
  user: User;
}
