import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  get usernamepassword(): { name: string; password: string } {
    return {
      name: '',
      password: '',
    };
  }
  constructor() {
    // this.usernamepassword = {
    //   name: 'nanna',
    //   password: 'password',
    //   // checkConsent: false,
    // };
  }

  templateForm: any;
  submitForm() {
    console.log(this.usernamepassword);
  }
  ngOnInit(): void {
    this.usernamepassword.name = '';
    this.usernamepassword.password = '';
  }
}
