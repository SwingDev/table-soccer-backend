import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

import { ScoreDto } from './score.dto';
import { ScoreMapper } from './score.mapper';
import { ScoreService } from './score.service';
import { ScoreboardService } from '../scoreboard/scoreboard.service';

@ApiBearerAuth()
@Controller()
export class ScoreController {
  constructor(
    private readonly scoreMapper: ScoreMapper,
    private readonly scoreService: ScoreService,
    private readonly scoreboardService: ScoreboardService,
  ) { }

  @Post('/')
  @ApiOperation({
    description: 'Adds a new score.'
  })
  public async addScore(@Body() scoreDto: ScoreDto) {
    const score = await this.scoreMapper.mapToEntity(scoreDto);

    return this.scoreMapper.mapToDto(
      await this.scoreService.takeNewScoreIntoAccount(score)
    );
  }
}
