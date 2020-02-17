import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ScoreboardController } from './scoreboard.controller';
import { ScoreboardService } from './scoreboard.service';
import { ScoreboardRepository } from './scoreboard.repository';

@Module({
  controllers: [ScoreboardController],
  exports: [
    ScoreboardService,
  ],
  providers: [
    ScoreboardService,
  ],
  imports: [
  	TypeOrmModule.forFeature([ScoreboardRepository]),
  ],
})
export class ScoreboardModule {}
