import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { DatabaseModule } from '../database/database.module';
import { categoriaProviders } from './categoria.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriaController],
  providers: [...categoriaProviders, CategoriaService],
  exports: ['CATEGORIA_REPOSITORY'], // Importante para que otros módulos lo vean
})
export class CategoriaModule {}