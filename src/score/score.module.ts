import { UserModule } from 'src/user/user.module';

import { Module } from '@nestjs/common';

import { ScoreController } from './score.controller';
import { ScoreMapper } from './score.mapper';
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
    UserModule
  ]
})
export class ScoreModule {}
