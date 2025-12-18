import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ImageComponent } from '../components/image/image.component';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { logoGoogle } from 'ionicons/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [IonicModule, ImageComponent, FormsModule],
})
export class AuthComponent implements OnInit {
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);
  private authService = inject(AuthService);

  email: string = '';
  password: string = '';

  constructor() {
    addIcons({ logoGoogle });
  }

  ngOnInit() {}

  handleLogin() {
    const user = {
      email: this.email,
      password: this.password,
    };
    console.log('login', user);
  }

  async handleGoogleLogin() {
    await this.authService.googleLogin();
  }

  handleRegister() {
    this.router.navigate(['/register'], { relativeTo: this.activeRoute });
  }

  handleForgotPassword() {
    console.log('forgot password');
  }
}
