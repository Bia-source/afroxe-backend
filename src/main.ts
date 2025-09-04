import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // Timeout global para 5 minutos (300000 ms)
  app.getHttpAdapter().getInstance().timeout = 300000;

  await app.listen(3000);
}
bootstrap();
