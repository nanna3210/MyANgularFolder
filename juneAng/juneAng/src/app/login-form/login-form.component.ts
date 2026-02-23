import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor() {}
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitregisterEvent = new EventEmitter();
  login: string = '';
  password: string = '';
  onSubmitregister() {
    this.onSubmitregisterEvent.emit({
      login: this.login,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
  onlogintab() {
    this.active = 'login';
  }
  onRegistertab() {
    this.active = 'register';
  }
  active: string = 'login';
  firstName: string = '';
  lastName: string = '';

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({
      login: this.login,
      password: this.password,
    });
  }

  ngOnInit(): void {}
}
