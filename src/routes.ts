import { Routes } from 'nest-router';

import { ScoreModule } from './score/score.module';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { UserModule } from './user/user.module';

export const routes: Routes = [
  {
    path: '/scoreboard',
    module: ScoreboardModule,
  },
  {
    path: '/user',
    module: UserModule,
  },
  {
    path: '/score',
    module: ScoreModule,
  }
];
