import { DataSource } from 'typeorm';
import entities from '../entities';
import 'dotenv/config';

export default new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '3000'),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_MIGRATION_DB,
  entities,
  migrations: [__dirname + '/../migrations/*.ts'],
});
