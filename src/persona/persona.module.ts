import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { personaProviders } from '../persona/persona.providers'; // El que creamos en el paso anterior
import { DatabaseModule } from '../database/database.module'; // ¡YA NO DARÁ ERROR!

@Module({
  imports: [DatabaseModule], // Importamos el módulo que acabamos de crear
  controllers: [PersonaController],
  providers: [
    ...personaProviders,
    PersonaService,
  ],
})
export class PersonaModule {}