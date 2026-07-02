// src/libros/libros.controller.ts
import { Post, Body } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { Patch, Param, Delete } from '@nestjs/common';
import { Controller, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('libros')
@UseGuards(JwtAuthGuard)
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
  async findOne(@Param('id') id: number) {
    return this.librosService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateLibroDto: any) {
    return this.librosService.update(id, updateLibroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.librosService.remove(id);
  }
}