// src/libros/libros.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libro.entity';
import { CreateLibroDto } from './dto/create-libro.dto';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private librosRepository: Repository<Libro>,
  ) {}

  // CREATE
  create(createLibroDto: CreateLibroDto) {
    const nuevoLibro = this.librosRepository.create(createLibroDto);
    return this.librosRepository.save(nuevoLibro);
  }

  // READ (All)
  findAll() {
    return this.librosRepository.find();
  }

  // READ (One)
  async findOne(id: number) {
    const libro = await this.librosRepository.findOneBy({ id });
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return libro;
  }

  // UPDATE
  async update(id: number, updateLibroDto: any) {
    const libro = await this.findOne(id); // Reutilizamos findOne para validar existencia
    const libroActualizado = Object.assign(libro, updateLibroDto);
    return this.librosRepository.save(libroActualizado);
  }

  // DELETE
  async remove(id: number) {
    const libro = await this.findOne(id); // Reutilizamos findOne para validar existencia
    return this.librosRepository.remove(libro);
  }
}