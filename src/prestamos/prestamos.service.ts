import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Prestamo } from './entities/prestamo.entity';

@Injectable()
export class PrestamosService {
  constructor(
    @Inject('PRESTAMO_REPOSITORY')
    private prestamoRepository: Repository<Prestamo>,
  ) {}

  async create(createPrestamoDto: any) {
    // Asociamos las relaciones mediante sus IDs
    const nuevoPrestamo = this.prestamoRepository.create({
      usuario: { id: createPrestamoDto.usuarioId },
      libro: { id: createPrestamoDto.libroId },
      fechaDevolucion: createPrestamoDto.fechaDevolucion,
    });
    return await this.prestamoRepository.save(nuevoPrestamo);
  }
  // src/prestamos/prestamos.service.ts

  async findAll() {
    return await this.prestamoRepository.find({
      relations: { usuario: true, libro: true } // Carga las entidades relacionadas
    });
  }

  async findOne(id: number) {
    const prestamo = await this.prestamoRepository.findOne({
      where: { id },
      relations: { usuario: true, libro: true }
    });
    if (!prestamo) {
      throw new Error(`Préstamo con ID ${id} no encontrado`);
    }
    return prestamo;
  }

  async update(id: number, updatePrestamoDto: any) {
    const prestamo = await this.findOne(id);
    Object.assign(prestamo, updatePrestamoDto);
    return await this.prestamoRepository.save(prestamo);
  }

  async remove(id: number) {
    const prestamo = await this.findOne(id);
    return await this.prestamoRepository.remove(prestamo);
  }
}