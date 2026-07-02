// src/usuarios/dto/create-usuario.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsEmail({}, { message: 'El formato del email no es válido' })
  @IsNotEmpty()
  email!: string;
  password: string;
}