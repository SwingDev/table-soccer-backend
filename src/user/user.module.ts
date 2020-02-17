import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserMapper } from './user.mapper';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserMapper,
  ],
  exports: [UserService]
})
export class UserModule {}
