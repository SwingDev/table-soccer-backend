import { Request } from 'express';

import { Controller, Get, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

import { UserService } from './user.service';

@ApiBearerAuth()
@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {

  }

  @Get('/')
  @ApiOperation({
    description: 'Get current user.'
  })
  public async getCurrentUser(@Req() req: Request) {
    const user = await this.userService.ensureUser(req.firebaseUser);

    return user;
  }
}
