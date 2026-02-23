import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string | null = '';
  price: string | null = '';
  name: string | null = '';

  constructor(private route: ActivatedRoute, private fakestore: WikiService) {}
  products: any[] = [];
  product: any = {};
  productId: string | null = null;

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.fakestore.getProducts().subscribe((data) => {
      // this.products = data;
      this.product = data.find((product) => product.id == this.productId);
    });
  }
}
