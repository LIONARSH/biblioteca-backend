import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    // Generar el hash de la contraseña antes de guardar
    const salt = await bcrypt.genSalt();
    createUsuarioDto.password = await bcrypt.hash(createUsuarioDto.password, salt);

    const nuevoUsuario = this.usuariosRepository.create(createUsuarioDto);
    return await this.usuariosRepository.save(nuevoUsuario);
  }

  findAll() {
    return this.usuariosRepository.find();
  }

  async findOne(id: number) {
    const usuario = await this.usuariosRepository.findOneBy({ id });
    if (!usuario) throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    return usuario;
  }

  async findOneByEmail(email: string): Promise<Usuario | null> {
    return await this.usuariosRepository.findOne({ 
      where: { email: email } 
    });
  }
}