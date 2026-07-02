// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // 1. Importa esto

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe());

  // 2. Configura el documento
  const config = new DocumentBuilder()
    .setTitle('API Biblioteca')
    .setDescription('Documentación de la API de mi proyecto de Programación Web')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 3. Esto crea la ruta /api

  await app.listen(3000);
}
bootstrap();