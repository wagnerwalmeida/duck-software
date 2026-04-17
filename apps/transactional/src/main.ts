import { NestFactory } from '@nestjs/core';
import { TransactionalModule } from './transactional.module';

async function bootstrap() {
  const app = await NestFactory.create(TransactionalModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
