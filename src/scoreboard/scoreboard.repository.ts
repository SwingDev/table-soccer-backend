import { EntityRepository, Repository } from 'typeorm';

import { Scoreboard } from './scoreboard.entity';

@EntityRepository(Scoreboard)
export class ScoreboardRepository extends Repository<Scoreboard> {}
