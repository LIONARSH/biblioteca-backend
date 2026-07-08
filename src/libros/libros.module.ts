import { Module } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';
import { DatabaseModule } from '../database/database.module';
import { librosProviders } from './libros.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [LibrosController],
  providers: [...librosProviders, LibrosService],
})
export class LibrosModule {}