import { All, Controller, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import type { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @All('*')
  async handleAuth(@Req() req: Request, @Res() res: Response) {
    const auth = this.authService.getAuth();
    return auth.handler(req, res);
  }
}
