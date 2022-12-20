import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class LoginUserDto extends CreateUserDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
