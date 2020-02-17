import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

import { ScoreDto } from './score.dto';
import { ScoreMapper } from './score.mapper';
import { ScoreService } from './score.service';

@ApiBearerAuth()
@Controller()
export class ScoreController {
  constructor(
    private readonly scoreMapper: ScoreMapper,
    private readonly scoreService: ScoreService,
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

  @Get('/history')
  @ApiOperation({
    description: 'List all the scores.',
  })
  public async getScoreHistory() {
    const history = await this.scoreService.list();

    return history.map((score) => this.scoreMapper.mapToDto(score));
  }
}
