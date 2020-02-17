import { Request, Response } from 'express';
import { UserService } from 'src/user/user.service';

import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

import { firebase } from './firebase';

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
  ) {}

  public async use(req: Request, res: Response, next: () => void) {
    const { authorization }= req.headers;

    if (!authorization) {
      throw new HttpException({ message: 'Authorization token not found!' }, HttpStatus.UNAUTHORIZED);
    }
    const token = authorization.slice(7);

    try {
      const user = await firebase
      .auth()
      .verifyIdToken(token);

      req.firebaseUser = user;

      await this.userService.ensureUser(req.firebaseUser);
    } catch (err) {
      throw new HttpException({ message: 'Input data validation failed!' }, HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
