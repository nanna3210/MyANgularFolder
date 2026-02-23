import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NannaComponent } from '../nanna/nanna.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NannaComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() name = 'World';
  productName: any;

  productDescriptionGiven: string =
    'the product you are viewing is the best Product as of now in market in this category ';
  @ViewChild('content') content: ElementRef | any;
  productSelection(event: any) {
    this.productName = event;
  }
  products: {
    name: string;
    price: number;
    discountPrice: number;
    id: number;
    brand: string;
  }[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Smartphone',
        price: 699,
        discountPrice: 649,
        brand: 'samsung',
      },
      {
        id: 2,
        name: 'Laptop',
        price: 1299,
        discountPrice: 1199,
        brand: 'acer',
      },
      {
        id: 3,
        name: 'Headphones',
        price: 199,
        discountPrice: 179,
        brand: 'Oneplus',
      },
    ];
  }
}
