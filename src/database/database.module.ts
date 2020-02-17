import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
      synchronize: true,
      keepConnectionAlive: process.env.NODE_ENV === 'test',
    }),
  ],
})
export class DatabaseModule {}
