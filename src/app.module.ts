import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module'; // Asegúrate de importar tu módulo
import { ConfigService } from './config/config.service'; // Importa el servicio
import { Usuario } from './usuarios/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { PersonaModule } from './persona/persona.module';
import { Persona } from './persona/entities/persona.entity';
import { LibrosModule } from './libros/libros.module';
import { Libro } from './libros/entities/libro.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { PrestamosModule } from './prestamos/prestamos.module';

@Module({
  imports: [
    ConfigModule, // Importa el módulo de configuración
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Usuario,Persona,Libro,Categoria], // Asegúrate de incluir todas las entidades necesarias
        synchronize: false, // ¡Cuidado! En producción esto debe ser false
      }),
    }),
    UsuariosModule,
    AuthModule,
    LibrosModule,
    PersonaModule,
    CategoriaModule,
    PrestamosModule,
    // ... otros módulos
  ],
})
export class AppModule {}