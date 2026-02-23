import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Observable,
  filter,
  interval,
  map,
  max,
  of,
  pipe,
  reduce,
  skip,
  take,
  toArray,
} from 'rxjs';
import { JokeService } from '../service/joke.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  @Input() personName: string;
  @ViewChild('helloEle') nanna: ElementRef;
  constructor(private joke: JokeService) {}
  data: any[] = [];

  users = [
    { name: 'Nanna Dash', salary: '1231231' },
    { name: 'Nanna Bhai', salary: '1231' },
    { name: 'Nanna Dash', salary: '1231233' },
  ];
  ngOnInit(): void {
    this.joke.getjoke().subscribe((data) => {
      this.data = data;
    });
  }
}
