import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
  .setTitle("Event Management System with Nest")
  .setDescription("This is Event management System build with Nest js with Docker and Ci/CD pipeline and Swagger")
  .setVersion("1.0.1")
  .build()

  const document = SwaggerModule.createDocument(app,config);

  SwaggerModule.setup("api/nest",app,document);



  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
