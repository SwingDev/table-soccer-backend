import { CRUDService } from 'src/common/crud.service';

import { Injectable } from '@nestjs/common';

import { Score } from './score.entity';
import { ScoreRepository } from './score.repository';

@Injectable()
export class ScoreService extends CRUDService<Score> {
  constructor(
    repository: ScoreRepository
  ) {
    super(repository);
  }

  public async takeNewScoreIntoAccount(score: Score) {
    await this.save(score);
  }
}
