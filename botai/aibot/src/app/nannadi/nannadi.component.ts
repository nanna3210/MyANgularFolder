import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-nannadi',
  templateUrl: './nannadi.component.html',
  styleUrls: ['./nannadi.component.css'],
})
export class NannadiComponent implements OnInit {
  isVisible: boolean = true;
  firtsName = 'kishore';
  lastName: string = 'kumar';
  form!: FormGroup;
  phone?: string;

  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({
      phone: new FormControl('', [Validators.required]),
    });
  }
  users: any[] = [];
  name: string = '';
  ngOnInit(): void {
    this.form = this.fb.group({
      // Define your form controls here
      email: [''],
      password: [''],
    });
  }

  toggleDisplay() {
    this.users = [
      { name: 'Laxmi', age: '20', gender: 'Female' },
      { name: 'Parvati', age: '33', gender: 'Female' },
      { name: 'Arya', age: '15', gender: 'Male' },
    ];
    this.isVisible = !this.isVisible;
  }

  onkeyEnter() {}
}
