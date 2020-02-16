import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function initSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Table soccer API')
    .setDescription('API for a table soccer application.')
    .setContact('Swing Development', undefined, 'hello@swing.dev')
    .addBearerAuth({
      type: 'apiKey',
      in: 'header',
      bearerFormat: 'JWT',
      name: 'Authorization'
    })
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
