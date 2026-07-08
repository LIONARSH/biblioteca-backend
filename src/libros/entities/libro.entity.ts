import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { forwardRef } from '@nestjs/common';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity('libros')
export class Libro {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column()
  autor!: string;

  @Column()
  isbn!: string;

  @Column({ default: true })
  disponible!: boolean;

  @ManyToOne(() => Categoria, (categoria) => categoria.libros)
@JoinColumn({ name: 'categoriaId' })
categoria!: Categoria;
}