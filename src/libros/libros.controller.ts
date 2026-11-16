// src/libros/libros.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.librosService.create(createLibroDto);
  }

  @Get()
  findAll() {
    return this.librosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.librosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLibroDto: any) {
    return this.librosService.update(+id, updateLibroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.librosService.remove(+id);
  }
}
