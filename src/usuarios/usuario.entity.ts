import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios') // Nombre de la tabla en Postgres
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column({ unique: true }) // Es buena práctica que el email sea único
  email!: string;

  @Column() // <--- NECESITAS ESTO para guardar el hash de la contraseña
  password!: string;
}