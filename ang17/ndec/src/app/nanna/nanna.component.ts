import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-nanna',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './nanna.component.html',
  styleUrl: './nanna.component.css',
})
export class NannaComponent {
  @Input() product: any;
  @Output() selectedProduct = new EventEmitter<any>();
  @ContentChild('content') theContent: ElementRef = new ElementRef(null);
  viewProduct() {
    this.selectedProduct.emit(this.product);
    // console.log('view product clicked ');
  }
}
