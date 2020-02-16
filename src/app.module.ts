import { RouterModule } from 'nest-router';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { routes } from './routes';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UserModule,
    ScoreboardModule,
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
    }),
    AuthenticationModule,
    DatabaseModule,
  ],
})
export class AppModule {}
