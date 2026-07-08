import { DataSource } from 'typeorm';
import { Libro } from './entities/libro.entity';

export const librosProviders = [
  {
    provide: 'LIBRO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Libro),
    inject: ['DATA_SOURCE'],
  },
];