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

  public async takeNewScoreIntoAccount(score: Score): Promise<Score> {
    console.log('SCORE BEFORE save', score);
    return await this.save(score);
  }
}
