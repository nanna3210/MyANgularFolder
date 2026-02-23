import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  categories: any[] = [];
  products: any[] = [];

  constructor() {}

  getProducts() {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => (this.products = data));
  }

  getCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        data.unshift('all');
        this.categories = data;
      });
  }

  addtocartItems: any[] = [];
  addTocart(product: any) {
    this.addtocartItems.push(product);
    this.getcartItemsCount();
  }
  count: number = 0;
  getcartItemsCount() {
    this.count = this.addtocartItems.length;
  }

  categoryChanged(e: any) {
    if (e.target.value == 'all') {
      this.getProducts();
    } else {
      fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
        .then((r) => r.json())
        .then((data) => (this.products = data));
    }
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }
}
