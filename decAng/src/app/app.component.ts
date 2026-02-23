import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  product: any = {};
  buttontext: string = 'price';

  constructor(@Inject(DOCUMENT) private document: Document) {}
  toggletemplate: TemplateRef<any> | null = null;
  count: number = 1;
  @ViewChild('priceTemplate', { static: true })
  pricetemplate: TemplateRef<any> | null = null;
  @ViewChild('ratingtemplate', { static: true })
  raingtemplate: TemplateRef<any> | null = null;

  getData(id: number) {
    fetch(`http://fakestoreapi.com/products/${id}`).then((response) =>
      response.json().then(
        (data) =>
          // (data) => console.log(data)
          (this.product = data)
      )
    );
  }
  previousClick() {
    this.count--;
    this.getData(this.count);
  }

  toggleDetails() {
    this.toggletemplate =
      this.toggletemplate == this.pricetemplate
        ? this.raingtemplate
        : this.pricetemplate;

    this.buttontext =
      this.buttontext == 'price'
        ? (this.buttontext = 'rating')
        : (this.buttontext = 'price');
  }

  nextClick() {
    this.count++;
    this.getData(this.count);
  }
  toggleButton() {}

  ngOnInit(): void {
    this.getData(this.count);
  }
}
