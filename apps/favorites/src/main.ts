import { NestFactory } from '@nestjs/core';
import { FavoritesModule } from './favorites.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(FavoritesModule, {
    options: {
      port: 3002,
    },
  });
  await app.listen();
}
bootstrap();
