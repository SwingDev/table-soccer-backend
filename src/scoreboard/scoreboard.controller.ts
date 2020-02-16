import { Request } from 'express';

import { Controller, Get, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller()
export class ScoreboardController {
  @Get('/')
  @ApiOperation({
    description: 'Test route.'
  })
  public test(@Req() req: Request) {
    return {
      user: req.firebaseUser,
    };
  }
}
