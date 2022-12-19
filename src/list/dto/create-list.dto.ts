import { IsNotEmpty, Length } from 'class-validator';

export class CreateListDto {
  @IsNotEmpty({ message: 'A descricao não pode ser nula' })
  @Length(3, 255)
  desc: string;

  // @IsNotEmpty({ message: 'A senha não pode ser nula' })
  // @Length(3, 255)
  // user: number;
}
