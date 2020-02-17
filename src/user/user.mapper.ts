import { Injectable } from '@nestjs/common';

import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserMapper {
  public toDto(user: User): UserDto {
    return Object.assign(new UserDto(), {
      firebaseId: user.firebaseId,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
    });
  }
}
