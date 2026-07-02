import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Libro } from './libros/libro.entity'; 
import { Usuario } from './usuarios/usuario.entity';  
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: '6969',  
      database: 'biblioteca_db', 
      entities: [Libro, Usuario], 
      synchronize: true, 
    }),
    LibrosModule,
    UsuariosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}