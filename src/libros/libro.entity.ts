import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libros') 
export class Libro {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column()
  autor!: string;

  @Column('int')
  stock!: number;
}