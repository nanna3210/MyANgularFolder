import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evntbind',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './evntbind.component.html',
  styleUrl: './evntbind.component.css',
})
export class EvntbindComponent {
  name: any = 'Angular';
  price: any = 34499;
  public products: { name: string; shippedTo: string }[] = [
    { name: 'SamSung Tv ', shippedTo: 'Delhi' },
    { name: 'SamSung galaxy ', shippedTo: 'BHubaneswar' },
    { name: 'SamSung Fridge ', shippedTo: 'Banglore' },
    { name: 'SamSung Washing Machine ', shippedTo: 'Mumbai' },
  ];

  public status: any = {
    Delhi: 'Delivery in two days ',
    BHubaneswar: 'Delivery in three days',
    Banglore: 'Delivery in four days',
    Mumbai: 'Delivery in five days',
  };

  mouseMove($event: MouseEvent) {
    console.log($event);
  }
}
