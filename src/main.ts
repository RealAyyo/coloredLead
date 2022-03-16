import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {json} from 'body-parser'
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setVersion('1.0.0')
      .setTitle('Цветные сделки')
      .setDescription('REST API документация виджета "Цветные сделки"')
      .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/documents', app, document)
  app.use(json())
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT, () => console.log(`Сервер запущен на ${process.env.PORT} порту`));
}

bootstrap();
