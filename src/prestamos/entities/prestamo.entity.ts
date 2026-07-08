import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/usuario.entity';
import { Libro } from '../../libros/entities/libro.entity';

@Entity('prestamos')
export class Prestamo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaPrestamo!: Date;

  @Column({ type: 'timestamp' })
  fechaDevolucion!: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.id)
  usuario!: Usuario;

  @ManyToOne(() => Libro, (libro) => libro.id)
  libro!: Libro;
}