import { Module } from '@nestjs/common';
import { AxiosService } from './axios.service';
import { GetAxiosBaseUrl } from './get-axios-base-url.service';
import {
	ConfigurationModule,
	ConfigurationService,
} from '@/libs/configuration';

@Module({
	imports: [ConfigurationModule],
	providers: [
		AxiosService,
		{
			provide: GetAxiosBaseUrl,
			useFactory: (configurationService: ConfigurationService) => {
				return {
					execute: async () =>
						await configurationService.get('API_BASE_URL'),
				};
			},
			inject: [ConfigurationService],
		},
	],
	exports: [AxiosService],
})
export class AxiosModule {}
