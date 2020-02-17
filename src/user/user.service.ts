import * as admin from 'firebase-admin';

import { Injectable } from '@nestjs/common';

import { CRUDService } from '../common/crud.service';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends CRUDService<User> {
  constructor(
    repository: UserRepository
  ) {
    super(repository);
  }

  public async ensureUser(firebaseUser: admin.auth.DecodedIdToken): Promise<User> {
    let user = await this.repository.findOne(firebaseUser.uid);

    if (!user) {
      user = await this.repository.create(Object.assign(new User(), {
        firebaseId: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.name,
        avatar: firebaseUser.picture,
      }));
    }

    return user;
  }
}
