import { IsNotEmpty } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  idUser: number;
  
  @IsNotEmpty()
  createdAt: string;
  
  @IsNotEmpty()
  companyName: string;
  
  @IsNotEmpty()
  ceo: string;
  
  @IsNotEmpty()
  location: string;
  
  @IsNotEmpty()
  idImage: number;
}
