import { inject, Injectable } from '@angular/core';
import { UserInput } from '../interfaces/user';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  async login(email: string, password: string) {}
  private auth = inject(Auth);
  private router = inject(Router);

  async googleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      const user = await signInWithPopup(this.auth, provider);

      console.log('Logged in with Google', user);
      await this.router.navigate(['/home']);
    } catch (error) {
      console.error('Google login error', error);
    }
  }

  async register(userInput: UserInput) {}
}
