import { Component } from '@angular/core';
import { WikiService } from './services/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private wiki: WikiService) {}
}
