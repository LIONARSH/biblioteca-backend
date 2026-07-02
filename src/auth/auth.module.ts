import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller'; // <--- IMPORTAR
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      secret: 'TU_CLAVE_SECRETA_SUPER_SEGURA',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController], // <--- AGREGAR AQUÍ
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}