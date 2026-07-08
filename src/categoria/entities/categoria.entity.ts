import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { forwardRef } from '@nestjs/common';
import { Libro } from '../../libros/entities/libro.entity';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

@OneToMany(() => Libro, (libro) => libro.categoria)
libros!: Libro[];
}