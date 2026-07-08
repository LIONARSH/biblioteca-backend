import { IsInt, IsNotEmpty, IsDateString, IsPositive } from 'class-validator';

export class CreatePrestamoDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  usuarioId!: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  libroId!: number;

  @IsDateString() // Valida que el formato sea una fecha ISO válida (ej: "2026-12-31")
  @IsNotEmpty()
  fechaDevolucion!: string;
}