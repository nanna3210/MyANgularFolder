import { Component } from '@angular/core';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { Router, RouterOutlet } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-route-main',
  standalone: true,
  imports: [UserDetailComponent, RouterOutlet, UserFormComponent],
  templateUrl: './route-main.component.html',
  styleUrl: './route-main.component.css',
})
export class RouteMainComponent {}
