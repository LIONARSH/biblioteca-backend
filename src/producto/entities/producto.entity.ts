import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  precio!: number;

  @Column({ type: 'int', default: 0 })
  stock!: number;

  @Column({ type: 'varchar', nullable: true })
  imagen?: string;

  @Column({ type: 'varchar', nullable: true, default: 'COMPLETO' })
  estado?: string;

  @Column({ type: 'int', nullable: true })
  categoria_id?: number;

  @ManyToOne(() => Categoria, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'categoria_id' })
  categoria?: Categoria;
}

