import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm!: any;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', [Validators.required]],
      mobile: ['', [Validators.pattern('[0-9]{10}')]],
    });
  }
  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.userForm = this.fb.group({
  //     name: ['', [Validators.required]],
  //     email: ['', [Validators.required, Validators.email]],
  //     address: ['', [Validators.required]],
  //     mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  //   });
  // }
  onclickSUbmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Invalid Form');
    }
  }
}
