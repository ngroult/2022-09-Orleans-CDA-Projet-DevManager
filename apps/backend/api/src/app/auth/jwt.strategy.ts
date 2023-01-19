import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request): string | null => {
          if (req && req.signedCookies && req.signedCookies['jwt']) {
            return req.signedCookies['jwt'];
          }
          return null;
        },
      ]),
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, username: payload.username };
  }
}
