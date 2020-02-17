import { Module } from '@nestjs/common';

import { ScoreController } from './score.controller';
import { ScoreMapper } from './score.mapper';

@Module({
  providers: [
    ScoreMapper,
  ],
  controllers: [
    ScoreController,
  ]
})
export class ScoreModule {}
