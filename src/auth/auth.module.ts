import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { ConfigModule } from '../config/config.module'; // 1. Importa el ConfigModule
import { ConfigService } from '../config/config.service'; // 1. Importa el ConfigService

@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    ConfigModule, // 2. Agrégalo a los imports
    JwtModule.registerAsync({
      imports: [ConfigModule], // 3. Importa el módulo aquí
      inject: [ConfigService], // 4. Inyecta el servicio
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'), // 5. Usa la variable del .env
        signOptions: { expiresIn: '60m' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}