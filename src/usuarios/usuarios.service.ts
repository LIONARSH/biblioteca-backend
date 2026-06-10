// src/usuarios/usuarios.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const nuevoUsuario = this.usuariosRepository.create(createUsuarioDto);
    return this.usuariosRepository.save(nuevoUsuario);
  }

  findAll() {
    return this.usuariosRepository.find();
  }

  async findOne(id: number) {
    const usuario = await this.usuariosRepository.findOneBy({ id });
    if (!usuario) throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    return usuario;
  }

  async update(id: number, updateDto: any) {
    const usuario = await this.findOne(id);
    Object.assign(usuario, updateDto);
    return this.usuariosRepository.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    return this.usuariosRepository.remove(usuario);
  }
}