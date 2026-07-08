export class CreatePersonaDto {
  nombre!: string;
  apellido!: string;
  telefono!: string;
  usuarioId!: number; // Este es el ID del usuario al que le pertenece este perfil
}