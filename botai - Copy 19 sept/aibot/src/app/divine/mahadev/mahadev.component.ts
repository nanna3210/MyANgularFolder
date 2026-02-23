import { Component, OnInit } from '@angular/core';
import { Coderrs } from 'src/app/devnana/coderrs';

@Component({
  selector: 'app-mahadev',
  templateUrl: './mahadev.component.html',
  styleUrls: ['./mahadev.component.css'],
})
export class MahadevComponent implements OnInit {
  constructor() {}

  isVisible: boolean = false;
  phone = ['samsung ', 'apple', 'OnePlus', 'vivo', 'Nokia'];
  color: string = 'red';
  users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 35 },
    { id: 3, name: 'Charlie', age: 42 },
  ];
  selectUser: Coderrs | null = null;
  selectedUser(user: Coderrs | null) {
    this.selectUser = user;
  }

  ngOnInit(): void {}
  changeTheColor(color: string) {
    this.color = color;
  }
}
