import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request): string | null => {
          const env = configService.get('NODE_ENV') || 'development';

          if (req && req.cookies && env === 'development') {
            const token = req.headers.cookie.split('.')[1];
            console.log('cookie =>', token);
            console.log('cookie =>', req.cookies);

            return token;
          } else if (req && req.signedCookies && env === 'production') {
            console.log('cookie signed', req.cookies);

            return req.signedCookies['jwt'];
          }

          return null;
        },
      ]),
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
