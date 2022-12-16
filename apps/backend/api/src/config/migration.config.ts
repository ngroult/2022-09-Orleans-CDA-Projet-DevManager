import { DataSource } from 'typeorm';
import { entities } from './entities';

export default new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '3000'),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities,
  synchronize: false,
  migrations: [__dirname + '/../migrations/*.ts'],
});
