import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { DatabaseModule } from '../database/database.module';
import { prestamosProviders } from './prestamos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PrestamosController],
  providers: [...prestamosProviders, PrestamosService],
})
export class PrestamosModule {}