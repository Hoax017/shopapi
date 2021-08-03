import { IsNotEmpty } from 'class-validator';

export class AddDto {
  @IsNotEmpty()
  readonly userId: number;

  @IsNotEmpty()
  readonly productId: number;
}