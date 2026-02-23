import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  templateUrl: './class-bind.component.html',
  styleUrls: ['./class-bind.component.scss'],
})
export class ClassBindComponent implements OnInit {
  constructor() {}

  styleObject = {
    position: 'fixed',
    top: '',
    left: '',
  };

  ngOnInit(): void {}
  mousemoving(e: any) {
    this.styleObject = {
      position: 'fixed',
      top: e.clientY + 'px',
      left: e.clientX + 'px',
    };

    // console.log(this.styleObject);
  }
}
