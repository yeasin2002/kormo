import { Injectable } from '@nestjs/common';
import { auth } from './auth.config';

@Injectable()
export class AuthService {
  getAuth() {
    return auth;
  }

  async getSession(request: Request) {
    return await auth.api.getSession({
      headers: request.headers,
    });
  }

  async signIn(email: string, password: string) {
    return await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  }

  async signUp(email: string, password: string, name: string) {
    return await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
  }
}
