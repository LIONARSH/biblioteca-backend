import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Persona } from '../persona/entities/persona.entity';
@Entity('usuarios') 
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  edad!: number; 

  // Eliminamos 'persona: any' y dejamos solo la relación correcta:
  @OneToOne(() => Persona, (persona) => persona.usuario)
  persona!: Persona; // Asegúrate que el tipo sea la Clase, no 'any'
}