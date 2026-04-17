import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
    constructor(private readonly envConfigService: ConfigService) {}
    async get(key: string) : Promise<string> {
        return this.envConfigService.get<string>(key) as string
    }
}
