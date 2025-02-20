import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPasswd = false;
  passwordType = 'password';

  constructor() {
    document.body.style.backgroundColor = '#1f1f1f';
  }

  togglePassword() {
    this.showPasswd = !this.showPasswd;
    this.passwordType = this.showPasswd ? 'text' : 'password';
  }
}
