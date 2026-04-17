import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { GetJwtSecret } from './get-jwt-secret.service';

@Injectable()
export class JwtService {
    constructor(private readonly jwtService: NestJwtService, private readonly getJwtSecret: GetJwtSecret) {}
    async sign({ payload = {}, expiresInSeconds = 60 * 3 }: { payload?: object; expiresInSeconds?: number }): Promise<string> {
        const secret = await this.getJwtSecret.execute()
        return await this.jwtService.signAsync(payload, { expiresIn: expiresInSeconds, secret })
    }
}
