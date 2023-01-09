import { Game } from 'src/entities';

export class CreateUserDto {
  id: number;

  username: string;

  email: string;

  password: string;
}
