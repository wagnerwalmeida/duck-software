import { Module } from '@nestjs/common';
import { TransactionalController } from './transactional.controller';
import { TransactionalService } from './transactional.service';

@Module({
  imports: [],
  controllers: [TransactionalController],
  providers: [TransactionalService],
})
export class TransactionalModule {}
