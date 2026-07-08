import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'; // 1. Agregamos los decoradores faltantes
import { Usuario } from "../../usuarios/usuario.entity";

@Entity() // 2. ¡ESTO ES OBLIGATORIO!
export class Persona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column({ nullable: true })
  apellido!: string;

  // Relación
  @OneToOne(() => Usuario, (usuario) => usuario.persona)
  @JoinColumn()
  usuario!: Usuario;
  @Column()
  telefono!: string;
}
