import { DataSource } from 'typeorm';
import { ConfigService } from '../config/config.service'; // Ajusta la ruta a tu config service

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE', // Este es el nombre del "Token"
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      // Aquí usamos la lógica que ya tienes en tu data-source o la cargamos del configService
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get('DB_HOST') || 'localhost',
        port: parseInt(configService.get('DB_PORT')) || 5432,
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false, // Siempre false porque ya usas migraciones
      });

      return dataSource.initialize();
    },
  },
];