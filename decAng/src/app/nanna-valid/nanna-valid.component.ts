import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-nanna-valid',
  templateUrl: './nanna-valid.component.html',
  styleUrls: ['./nanna-valid.component.scss'],
})
export class NannaValidComponent implements OnInit {
  frmRegister: any;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.frmRegister = this.fb.group({
      Name: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      price: this.fb.control(''),
      frmStock: this.fb.group({
        status: this.fb.control(false),
        city: this.fb.control(''),
      }),
    });
  }

  get Name() {
    return this.frmRegister.get('Name') as FormControl;
  }

  // frmRegister = new FormGroup({
  //   Name: new FormControl(''),
  //   price: new FormControl(0),
  //   frmStock: new FormGroup({
  //     status: new FormControl(false),
  //     city: new FormControl(''),
  //   }),
  // shippedTo: new FormControl(''),
  // });

  formSubmit(e: any) {
    alert(JSON.stringify(e));
  }

  // formcontrol
  // frmgroup
}
