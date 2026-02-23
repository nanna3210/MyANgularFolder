import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  products: any = {};
  constructor() {}

  allcount: number = 0;
  electronicsCount: number = 0;
  jeweleryCount: number = 0;
  menClothingCount: number = 0;
  womenClothingCount: number = 0;

  categoryName: string = 'all';
  getCategoryName(e: any) {
    this.categoryName = e.target.name;
    console.log(e.target.name);
  }

  getproducts() {
    fetch('http://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
        this.allcount = data.length;
        this.electronicsCount = data.filter(
          (product: any) => product.category == 'electronics'
        ).length;
        this.jeweleryCount = data.filter(
          (product: any) => product.category == 'jewelery'
        ).length;
        this.menClothingCount = data.filter(
          (product: any) => product.category == `men's clothing`
        ).length;
        this.womenClothingCount = data.filter(
          (product: any) => product.category == `women's clothing`
        ).length;
      });
  }

  ngOnInit(): void {
    this.getproducts();
  }
}
