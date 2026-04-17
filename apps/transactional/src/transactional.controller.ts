import { Controller, Get } from '@nestjs/common';
import { TransactionalService } from './transactional.service';

@Controller()
export class TransactionalController {
  constructor(private readonly transactionalService: TransactionalService) {}

  @Get()
  getHello(): string {
    return this.transactionalService.getHello();
  }
}
