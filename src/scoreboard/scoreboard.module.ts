import { Module } from '@nestjs/common';
import { ScoreboardController } from './scoreboard.controller';

@Module({
  controllers: [ScoreboardController]
})
export class ScoreboardModule {}
