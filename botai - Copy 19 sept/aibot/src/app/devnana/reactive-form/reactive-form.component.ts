import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      country: new FormControl('', [Validators.required]),
      zip: new FormControl('', [
        Validators.maxLength(6),
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}
  onsubmit() {
    console.log(this.form.value);
  }
}
