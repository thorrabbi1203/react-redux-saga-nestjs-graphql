import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { initSwagger } from './app.swagger';
import { setDefaultUser } from './config/default-user';

const port = Number(process.env.PORT);

async function App() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //Fix cors
  initSwagger(app);
  setDefaultUser();
  // app.useGlobalPipes Must be before app.listen
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(port);
}
App();
