import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as cookieParser from 'cookie-parser';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);

  const NODE_ENV = configService.get('NODE_ENV') || 'development';
  const PORT = configService.get('PORT') || 3000;

  app.setGlobalPrefix('api');
  app.use(cookieParser(configService.get('COOKIE_SECRET')));

  Logger.log(
    `App is running at http://localhost:${PORT}/api in ${NODE_ENV} mode`,
    '🚀',
  );
  await app.listen(PORT);
}
bootstrap();
