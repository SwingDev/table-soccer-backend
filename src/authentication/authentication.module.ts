import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { FirebaseAuthMiddleware } from './authentication.middleware';

@Module({})
export class AuthenticationModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirebaseAuthMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
