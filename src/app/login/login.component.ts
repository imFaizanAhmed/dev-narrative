import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isSignup: boolean;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;

  constructor() {
    this.isSignup = true;
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
    this.password = '';
  }
}
