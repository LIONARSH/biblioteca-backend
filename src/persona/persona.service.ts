import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonaService {
  constructor(
    @Inject('PERSONA_REPOSITORY')
    private personaRepository: Repository<Persona>,
  ) {}

  async create(createPersonaDto: CreatePersonaDto) {
    const nuevaPersona = new Persona();
    nuevaPersona.nombre = createPersonaDto.nombre;
    nuevaPersona.apellido = createPersonaDto.apellido;
    nuevaPersona.telefono = createPersonaDto.telefono;
    nuevaPersona.usuario = { id: createPersonaDto.usuarioId } as any;

    return await this.personaRepository.save(nuevaPersona);
  }

  async findAll() {
    return await this.personaRepository.find({ relations: { usuario: true } });
  }

  async findOne(id: number) {
    return await this.personaRepository.findOne({ 
      where: { id },
      relations: { usuario: true } 
    });
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return await this.personaRepository.update(id, updatePersonaDto);
  }

  async remove(id: number) {
    return await this.personaRepository.delete(id);
  }
}