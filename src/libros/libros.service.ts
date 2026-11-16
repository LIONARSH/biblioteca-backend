// src/libros/libros.service.ts
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
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
    const libro = this.librosRepository.create({
      ...createLibroDto,
      categoria: createLibroDto.categoriaId ? ({ id: createLibroDto.categoriaId } as any) : undefined,
    });
    return this.librosRepository.save(libro);
  }

  // READ (All)
  findAll() {
    return this.librosRepository.find({
      relations: { categoria: true },
      order: { id: 'asc' },
    });
  }

  // READ (One)
  async findOne(id: number) {
    const libro = await this.librosRepository.findOne({
      where: { id },
      relations: { categoria: true },
    });
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return libro;
  }

  // UPDATE
  async update(id: number, updateLibroDto: any) {
    const libro = await this.findOne(id);
    if (updateLibroDto.categoriaId !== undefined) {
      libro.categoria = updateLibroDto.categoriaId ? ({ id: updateLibroDto.categoriaId } as any) : (null as any);
    }
    const { categoriaId, ...resto } = updateLibroDto;
    Object.assign(libro, resto);
    return this.librosRepository.save(libro);
  }

  // DELETE
  async remove(id: number) {
    const libro = await this.findOne(id);
    return this.librosRepository.remove(libro);
  }
}
