import { IsString, IsNotEmpty, IsInt, IsPositive } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsString()
  @IsNotEmpty()
  autor!: string;

  @IsString()
  @IsNotEmpty()
  isbn!: string;

  @IsInt()      // Validamos que sea un número entero
  @IsPositive() // Validamos que sea un ID válido (mayor a 0)
  @IsNotEmpty()
  categoriaId!: number;
}