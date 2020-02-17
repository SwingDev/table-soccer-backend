import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

import { Injectable } from '@nestjs/common';

import { ScoreDto } from './score.dto';
import { Score } from './score.entity';

@Injectable()
export class ScoreMapper {
  constructor(private readonly userService: UserService) { }

  public async mapToEntity(scoreDto: ScoreDto): Promise<Score> {
    const [winner, loser]: User[] = await Promise.all([
      this.userService.find(scoreDto.winner),
      this.userService.find(scoreDto.loser),
    ])

    return Object.assign(new Score(), {
      winner,
      loser,
      loserScore: scoreDto.loserScore,
      timestamp: scoreDto.timestamp
    });
  }

  public mapToDto(score: Score): ScoreDto {
    return Object.assign(new ScoreDto(), {
      winner: score.winner.firebaseId,
      loser: score.loser.firebaseId,
      loserScore: score.loserScore,
      timestamp: score.timestamp,
    });
  }
}
