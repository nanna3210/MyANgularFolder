import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-moredetails',
  templateUrl: './moredetails.component.html',
  styleUrls: ['./moredetails.component.scss'],
})
export class MoredetailsComponent implements OnInit {
  productId: string | null = null;
  product: any = {};
  constructor(private route: ActivatedRoute, private fakestore: WikiService) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');
    console.log(this.productId);
    this.fakestore.getProducts().subscribe((data) => {
      this.product = data.find((product) => product.id == this.productId);
    });
  }
}
