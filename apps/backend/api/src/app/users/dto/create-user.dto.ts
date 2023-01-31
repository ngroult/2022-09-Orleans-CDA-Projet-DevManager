import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 30, {
    message: 'Your username must be between 3 and 30 characters length',
  })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 50, {
    message: 'Your password must be between 6 and 50 characters length',
  })
  password: string;

  @IsNumber()
  imageId: number;
}
