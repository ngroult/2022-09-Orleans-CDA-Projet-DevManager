import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';
import { ResourcesModule } from './resources/resources.module';
import { GameResourcesModule } from './game-resources/game-resources.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_DB'),
        synchronize: configService.get('DATABASE_SYNCHRONIZE') === 'true',
      }),
      inject: [ConfigService],
    }),
    GamesModule,
    UsersModule,
    AuthModule,
    ResourcesModule,
    GameResourcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
