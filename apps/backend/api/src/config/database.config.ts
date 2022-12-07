import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { User } from '../users/entities/user.entity';

export const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '3000'),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [User],
  synchronize: false,
  migrations: [__dirname + '/../migrations/*.ts'],
};
