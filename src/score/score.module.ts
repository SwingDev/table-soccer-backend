import { ScoreboardModule } from 'src/scoreboard/scoreboard.module';
import { UserModule } from 'src/user/user.module';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ScoreController } from './score.controller';
import { ScoreMapper } from './score.mapper';
import { ScoreRepository } from './score.repository';
import { ScoreService } from './score.service';

@Module({
  providers: [
    ScoreMapper,
    ScoreService,
  ],
  controllers: [
    ScoreController,
  ],
  imports: [
    UserModule,
    ScoreboardModule,
    TypeOrmModule.forFeature([ScoreRepository]),
  ]
})
export class ScoreModule {}
