import { Test, TestingModule } from '@nestjs/testing';
import { OnboardingController } from './onboarding.controller';
import { OnboardingService } from './onboarding.service';

describe('OnboardingController', () => {
  let onboardingController: OnboardingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OnboardingController],
      providers: [OnboardingService],
    }).compile();

    onboardingController = app.get<OnboardingController>(OnboardingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(onboardingController.getHello()).toBe('Hello World!');
    });
  });
});
