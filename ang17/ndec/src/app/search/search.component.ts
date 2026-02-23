import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { User } from '../contract/User';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm: string = '';
  @Input() filterUsers: User[] = [];
  @Output() searchTermChange: EventEmitter<string> = new EventEmitter<string>();
  clearSearch() {
    this.searchTerm = '';
  }
  onKeyup(event: any) {
    this.searchTerm = event.target.value;
    this.searchTermChange.emit(this.searchTerm);
  }
}
