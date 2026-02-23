import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  choice: string = '';
  color = '';
  selected: boolean = false;

  onclickingIn(ip: string) {
    this.choice = ip.toLowerCase();
  }
  constructor() {}
  tiles = [
    {
      text: 'one ',
      color:
        'linear-gradient(to top right, rgb(181, 181, 46), rgb(63, 126, 63))',
    },
    {
      text: 'two ',
      color:
        'linear-gradient(to top right, rgb(59, 59, 45), rgb(203, 212, 34))',
    },
    {
      text: 'three ',
      color:
        'linear-gradient(to top right, rgb(159, 56, 24), rgb(34, 150, 212))',
    },
    {
      text: 'four ',
      color:
        'linear-gradient(to top right, rgb(168, 130, 37), rgb(63, 153, 202))',
    },
  ];

  onmouseOver() {
    this.selected = !this.selected;
  }

  ngOnInit(): void {}
}
