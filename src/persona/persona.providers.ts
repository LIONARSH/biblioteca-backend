import { DataSource } from 'typeorm';
import { Persona } from './entities/persona.entity';

export const personaProviders = [
  {
    provide: 'PERSONA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Persona),
    inject: ['DATA_SOURCE'], // Asegúrate de que este nombre coincida con el de tu database.provider
  },
];