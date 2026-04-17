import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { OnboardingController } from './onboarding.controller';
import { OnboardingService } from './onboarding.service';
import { JwtModule } from '@/libs/jwt.module';
import { SignJWTMiddleware } from '@/libs/sign.middleware';

@Module({
	imports: [JwtModule],
	controllers: [OnboardingController],
	providers: [OnboardingService],
})
export class OnboardingModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(SignJWTMiddleware).forRoutes({ path: "onboarding/prospect", method: RequestMethod.POST })
	}
}
