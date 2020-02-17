import { Request } from 'express';

import { Controller, Get, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

import { UserMapper } from './user.mapper';
import { UserService } from './user.service';

@ApiBearerAuth()
@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userMapper: UserMapper
  ) {

  }

  @Get('/me')
  @ApiOperation({
    description: 'Get current user.'
  })
  public async getCurrentUser(@Req() req: Request) {
    const user = await this.userService.ensureUser(req.firebaseUser);

    return user;
  }

  @Get('/')
  @ApiOperation({
    description: 'List all the users.'
  })
  public async listUsers() {
    const users = await this.userService.list();

    return users.map(user => this.userMapper.toDto(user));
  }
}
