import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

import { ScoreDto } from './score.dto';
import { ScoreMapper } from './score.mapper';

@ApiBearerAuth()
@Controller()
export class ScoreController {
  constructor(
    private readonly scoreMapper: ScoreMapper,
  ) { }

  @Post('/')
  @ApiOperation({
    description: 'Adds a new score.'
  })
  public async addScore(@Body() scoreDto: ScoreDto) {
    const score = await this.scoreMapper.mapToEntity(scoreDto);
  }
}
