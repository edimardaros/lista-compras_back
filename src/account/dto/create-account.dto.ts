import { IsNotEmpty, Length } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty({ message: 'O email não pode ser nulo' })
  @Length(3, 255)
  email: string;

  @IsNotEmpty({ message: 'A senha não pode ser nula' })
  @Length(3, 255)
  password: string;
}
