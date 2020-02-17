import { CRUDService } from 'src/common/crud.service';
import { ScoreboardService } from 'src/scoreboard/scoreboard.service';

import { Injectable } from '@nestjs/common';

import { Score } from './score.entity';
import { ScoreRepository } from './score.repository';

@Injectable()
export class ScoreService extends CRUDService<Score> {
  constructor(
    repository: ScoreRepository,
    private readonly scoreboardService: ScoreboardService,
  ) {
    super(repository);
  }

  public async takeNewScoreIntoAccount(score: Score): Promise<Score> {
    const newlyAddedScore = await this.save(score);
    await this.scoreboardService.takeNewScoreIntoAccount(newlyAddedScore);

    return newlyAddedScore;
  }
}
