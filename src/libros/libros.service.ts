// src/libros/libros.service.ts
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './entities/libro.entity';
import { CreateLibroDto } from './dto/create-libro.dto';

@Injectable()
export class LibrosService {
  constructor(
    @Inject('LIBRO_REPOSITORY')
    private librosRepository: Repository<Libro>,
  ) {}

  // CREATE
 create(createLibroDto: CreateLibroDto) {
  // Mapeamos el ID de la categoría a la relación
  const libro = this.librosRepository.create({
    ...createLibroDto,
    categoria: { id: createLibroDto.categoriaId } as any
  });
  return this.librosRepository.save(libro);
}

  // READ (All)
    findAll() {
     return this.librosRepository.find({
       relations: { categoria: true } // Esto hace un LEFT JOIN automático
  });
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