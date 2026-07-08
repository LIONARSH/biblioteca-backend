import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env.development') });

import { DataSource } from "typeorm";
import { Usuario } from "../usuarios/usuario.entity";
import { Persona } from "../persona/entities/persona.entity";
import { Libro } from "../libros/entities/libro.entity"; // <--- 1. IMPORTA AQUÍ
import { Categoria } from '../categoria/entities/categoria.entity';
import { Prestamo } from '../prestamos/entities/prestamo.entity';
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Usuario, Persona, Libro, Categoria, Prestamo], // <--- 2. AGREGA AQUÍ
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
});