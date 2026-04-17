import { Controller, Get, Post } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';

@Controller('/onboarding/prospect')
export class OnboardingController {
	@Post()
	async createProspect() {}
}
