import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtService } from './jwt.service';
import {
	ConfigurationModule,
	ConfigurationService,
} from '@/libs/configuration';
import { GetJwtSecret } from './get-jwt-secret.service';

@Module({
	imports: [NestJwtModule, ConfigurationModule],
	providers: [
		JwtService,
		{
			provide: GetJwtSecret,
			useFactory: (configurationService: ConfigurationService) => {
				return {
					execute: async () =>
						await configurationService.get('JWT_SECRET'),
				};
			},
			inject: [ConfigurationService],
		},
	],
	exports: [JwtService],
})
export class JwtModule {}
