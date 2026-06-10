// src/libros/dto/create-libro.dto.ts
import { IsString, IsInt, Min } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  titulo!: string;

  @IsString()
  autor!: string;

  @IsInt()
  @Min(0)
  stock!: number;
}