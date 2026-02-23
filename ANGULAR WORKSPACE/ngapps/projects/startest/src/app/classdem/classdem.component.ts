import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitlePipe } from '../title.pipe';
import { MydirectiveDirective } from '../directives/mydirective.directive';

@Component({
  selector: 'app-classdem',
  standalone: true,
  imports: [CommonModule, FormsModule, TitlePipe, MydirectiveDirective],
  templateUrl: './classdem.component.html',
  styleUrls: ['./classdem.component.css'],
})
export class ClassdemComponent implements OnInit {
  isSpecial: boolean = true;
  employees: any = [
    { empid: 1, empname: 'Rajesh Kumar', gender: 'male' },
    { empid: 2, empname: 'Sunita Verma', gender: 'female' },
    { empid: 3, empname: 'Amit Singh', gender: 'male' },
    { empid: 4, empname: 'Priya Sharma', gender: 'female' },
    { empid: 5, empname: 'Rakesh Mehta', gender: 'male' },
    { empid: 6, empname: 'Neha Joshi', gender: 'female' },
    { empid: 7, empname: 'Manoj Tiwari', gender: 'male' },
    { empid: 8, empname: 'Kiran Bedi', gender: 'female' },
    { empid: 9, empname: 'Suresh Raina', gender: 'male' },
    { empid: 10, empname: 'Anita Desai', gender: 'female' },
  ];

  ngOnInit(): void {
    console.log('The is Special value is: ' + this.isSpecial);
  }
}
