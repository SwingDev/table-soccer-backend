import { UserModule } from 'src/user/user.module';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ScoreboardController } from './scoreboard.controller';
import { ScoreboardMapper } from './scoreboard.mapper';
import { ScoreboardRepository } from './scoreboard.repository';
import { ScoreboardService } from './scoreboard.service';

@Module({
  controllers: [ScoreboardController],
  exports: [
    ScoreboardService,
  ],
  providers: [
    ScoreboardService,
    ScoreboardMapper,
  ],
  imports: [
    UserModule,
  	TypeOrmModule.forFeature([ScoreboardRepository]),
  ],
})
export class ScoreboardModule {}
