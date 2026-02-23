import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NannaComponent } from './nanna/nanna.component';
import { UsercoComponent } from './comps/userco/userco.component';
import { UseerseService } from './serv/useerse.service';
import { SearchComponent } from './search/search.component';
import { RouteMainComponent } from './comps/route-main/route-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    NannaComponent,
    UsercoComponent,
    SearchComponent,
    RouteMainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ndec';
  appName: string = 'flipkart';
  userId: any;
  getUserId(id: number) {
    this.userId = id;
  }
}
