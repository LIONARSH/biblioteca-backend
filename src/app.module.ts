import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
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
import { ProductoModule } from './producto/producto.module';
import { Producto } from './producto/entities/producto.entity';

@Module({
  imports: [
    ConfigModule,
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
        entities: [Usuario, Persona, Libro, Categoria, Producto],
        synchronize: false,
      }),
    }),
    UsuariosModule,
    AuthModule,
    LibrosModule,
    PersonaModule,
    CategoriaModule,
    PrestamosModule,
    ProductoModule,
  ],
})
export class AppModule {}
