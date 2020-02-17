import { UserService } from 'src/user/user.service';

import { Injectable } from '@nestjs/common';

import { ScoreboardDto } from './scoreboard.dto';
import { Scoreboard } from './scoreboard.entity';

@Injectable()
export class ScoreboardMapper {
  constructor(private readonly userService: UserService) { }

  public async mapToEntity(scoreboardDto: ScoreboardDto): Promise<Scoreboard> {
    const user = await this.userService.find(scoreboardDto.firebaseId);

    return Object.assign(new Scoreboard(), {
      user,
      score: scoreboardDto.score,
    });
  }

  public mapToDto(scoreboard: Scoreboard): ScoreboardDto {
    return Object.assign(new ScoreboardDto(), {
      firebaseId: scoreboard.user.firebaseId,
      email: scoreboard.user.email,
      score: scoreboard.score,
      name: scoreboard.user.name,
      avatar: scoreboard.user.avatar,
    });
  }
}
