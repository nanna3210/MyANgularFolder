import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.scss'],
})
export class ForDemoComponent implements OnInit {
  data: any = [
    { category: 'electronics', products: ['tv', 'mobile'] },
    { category: 'fashion', products: ['shoes', 'sweashirt'] },
  ];
  products: any[] = [];
  productName: string = '';
  productPrice: number = 0;
  product: any = {};

  registerClick() {
    this.product = {
      Name: this.productName,
      price: this.productPrice,
    };
    this.products.push(this.product);
  }

  constructor() {}

  getmarsPhoto() {
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
    ).then((response) => response.json);
    // .then((data) => console.log(data));
    // .then((data) => (this.marsdata = data));
  }
  deleteClick(index: number) {
    let flag = confirm('are u sure want to delete');

    if (flag == true) {
      // console.log(this.products[index].Name);
      this.products.splice(index);
    }
  }

  ngOnInit(): void {
    this.getmarsPhoto();
  }
}
