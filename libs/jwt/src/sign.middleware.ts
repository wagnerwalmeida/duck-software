import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from './jwt.service';

@Injectable()
export class SignJWTMiddleware implements NestMiddleware {
	constructor(private readonly jwtService: JwtService) {}
	async use(req: Request, res: Response, next: NextFunction) {
		res.cookie('access_token', await this.jwtService.sign({}), {
			httpOnly: true, // impede acesso via JS
			secure: false, // só HTTPS
			sameSite: 'strict', // ou 'lax'
			maxAge: 15 * 60 * 1000, // 15 min
		});
		next();
	}
}
