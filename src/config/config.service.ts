import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    // Detecta si estamos en desarrollo o producción
    const env = process.env.NODE_ENV || 'development';
    const path = `.env.${env}`;
    
    // Verifica si el archivo existe
    if (fs.existsSync(path)) {
      this.envConfig = dotenv.parse(fs.readFileSync(path));
    } else {
      console.error(`Archivo ${path} no encontrado`);
      process.exit(0); // Detiene el servidor si no hay config
    }
  }

  // Método para obtener cualquier variable
  get(key: string): string {
    return this.envConfig[key];
  }
}