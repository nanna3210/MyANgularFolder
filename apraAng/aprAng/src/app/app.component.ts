import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

interface user {
  id: string;
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe],
})
export class AppComponent implements OnInit {
  nanna: user[];
  birthday = new Date(1987, 6, 18);
  constructor() {
    this.nanna = [
      {
        id: '1',
        name: 'nanna',
        age: 22,
      },
      {
        id: '2',
        name: 'nanna Dash ',
        age: 32,
      },
      {
        id: '3',
        name: 'nanna bhai ',
        age: 42,
      },
    ];
  }
  ngOnInit(): void {}
}
