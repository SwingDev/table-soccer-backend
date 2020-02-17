import { EntityRepository, Repository } from 'typeorm';

import { Score } from './score.entity';

@EntityRepository(Score)
export class ScoreRepository extends Repository<Score> { }
