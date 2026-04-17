import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionalService {
  getHello(): string {
    return 'Hello World!';
  }
}
