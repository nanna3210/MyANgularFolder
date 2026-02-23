import { Component, OnInit } from '@angular/core';
import { FakestoreapiService } from '../service/fakestoreapi.service';
import { NasaService } from '../service/nasa.service';

@Component({
  selector: 'app-nanna-demo',
  templateUrl: './nanna-demo.component.html',
  styleUrls: ['./nanna-demo.component.scss'],
})
export class NannaDemoComponent implements OnInit {
  constructor(
    private fakestore: FakestoreapiService,
    private nasaService: NasaService
  ) {}
  categories: string[] = [];
  products: any[] = [];
  mars: any = {};

  ngOnInit(): void {
    this.fakestore.getcategories().subscribe((category) => {
      this.categories = category;
      // console.log(category);
    });
    this.fakestore
      .getproducts()
      .subscribe((product) => (this.products = product));

    this.nasaService.getmarsPhoto().subscribe((data) => {
      this.mars = data;
      console.log(data);

      console.log(data.photos[1].camera.full_name);
    });
  }
  // this.nasaService.getmarsPhoto().subscribe(data => this.mars = data)
}
