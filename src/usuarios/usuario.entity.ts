// src/usuarios/usuario.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios') // Nombre de la tabla en Postgres
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  email!: string;
}