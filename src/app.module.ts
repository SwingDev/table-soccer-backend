import { Module } from '@nestjs/common';

import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ScoreboardModule],
})
export class AppModule {}
