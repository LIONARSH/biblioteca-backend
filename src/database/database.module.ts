import { Module, Global } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigModule } from '../config/config.module'; // 1. Importa el módulo

@Global()
@Module({
  imports: [ConfigModule], // 2. Agrégalo aquí a los imports
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}