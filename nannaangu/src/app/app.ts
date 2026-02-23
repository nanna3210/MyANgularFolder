import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    console.log(this.title)
    console.log(this.nanna)
  }
  protected readonly title = signal('nannaangu');
  nanna:string = "nanna dash"



}
