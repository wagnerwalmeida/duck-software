import { Module } from '@nestjs/common';
import { TransactionalModule } from "@/modules/transactional.module"
import { OnboardingModule } from "@/modules/onboarding.module"

@Module({
  imports: [TransactionalModule, OnboardingModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
