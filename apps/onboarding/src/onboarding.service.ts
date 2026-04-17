import { Injectable } from '@nestjs/common';

@Injectable()
export class OnboardingService {
  getHello(): string {
    return 'Hello World!';
  }
}
