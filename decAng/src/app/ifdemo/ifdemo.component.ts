import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.scss'],
})
export class IfdemoComponent implements OnInit {
  users: any = {};
  product: any = {};
  constructor() {}

  getData(id: number) {
    fetch(`http://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => (this.product = data));
  }
  templateToDisplay: string = 'basic';

  changTemplate(e: any) {
    this.templateToDisplay = e.target.name;
  }

  ngOnInit(): void {
    this.getData(4);
  }
}
