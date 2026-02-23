import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Coderrs } from '../coderrs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnChanges, DoCheck {
  constructor() {}
  ngDoCheck(): void {
    console.log(' Hello from Do Check');
  }

  @Input() coderUser: Coderrs | null = null;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('hello ', changes);
  }

  ngOnInit(): void {
    console.log('Hello ');
  }
}
