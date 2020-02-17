import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

import { ScoreboardMapper } from './scoreboard.mapper';
import { ScoreboardService } from './scoreboard.service';

@ApiBearerAuth()
@Controller()
export class ScoreboardController {
  constructor(
    private readonly scoreboardService: ScoreboardService,
    private readonly scoreboardMapper: ScoreboardMapper,
  ) { }

  @Get('/')
  @ApiOperation({
    description: 'Scoreboard.'
  })
  public async showScoreboard() {
    const scoreboards = await this.scoreboardService.list();

    return scoreboards.map(
      scoreboard => this.scoreboardMapper.mapToDto(scoreboard)
    );
  }
}
