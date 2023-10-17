import { IsNotEmpty } from 'class-validator';

export class CatDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;
}
