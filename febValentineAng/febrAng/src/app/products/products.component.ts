import { Component, OnInit } from '@angular/core';
import { WikiService } from '../services/wiki.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] | undefined;
  categoryName: string | null = null;
  constructor(private fakestore: WikiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.fakestore.getProducts().subscribe((data) => {
    //   this.products = data;
    // });
    this.categoryName = this.route.snapshot.paramMap.get('category');
    // console.log(this.categoryName);

    this.fakestore.getProducts().subscribe((data) => {
      // console.log(data);
      this.products = data.filter(
        (product) => product.category == this.categoryName
      );
      console.log(this.products);
    });
  }
}
