import { Request, Response } from 'express';

import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';

import { firebase } from './firebase';

export class FirebaseAuthMiddleware implements NestMiddleware {
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
    } catch (err) {
      throw new HttpException({ message: 'Input data validation failed!' }, HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
