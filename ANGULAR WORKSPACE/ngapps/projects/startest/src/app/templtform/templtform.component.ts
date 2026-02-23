import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-templtform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templtform.component.html',
  styleUrl: './templtform.component.css',
})
export class TempltformComponent {
  onSubmit(_t7: NgForm) {
    throw new Error('Method not implemented.');
  }
}
