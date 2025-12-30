import {Component, inject, OnInit} from '@angular/core';
import {ImageComponent} from "../components/image/image.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import { addIcons } from 'ionicons';
import {arrowBack} from "ionicons/icons";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
  imports: [
    ImageComponent,
    IonicModule,
    FormsModule
  ]
})
export class RegisterComponent  implements OnInit {
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);

    name: string = '';
    email: string = '';
    phone: string = '';
    password: string = '';
    role: [string] = ['client']
  constructor() {
    addIcons({ arrowBack });
  }

  ngOnInit() {}

  handleRegister() {
      console.log('register', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          role: this.role
      })
  }

  goBack() {
     this.router.navigate(['/auth'], { relativeTo: this.activeRoute });
  }

}
