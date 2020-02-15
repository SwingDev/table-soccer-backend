import * as helmet from 'helmet';

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { helmetConfig } from './helmet.config';
import { initSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  app.use(helmet(helmetConfig));
  app.enableCors();

  initSwagger(app);

  await app.listen(3000);
}
bootstrap();

const logger = new Logger('Unhandled');

function shutdown(error) {
  logger.error(error);
  process.exit(1);
}

process.on('uncaughtException', shutdown);
process.on('unhandledRejection', shutdown);
