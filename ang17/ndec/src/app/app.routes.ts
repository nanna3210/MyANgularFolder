import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsercoComponent } from './comps/userco/userco.component';
import { UserDetailComponent } from './comps/user-detail/user-detail.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'user',
  //   component: UsercoComponent,
  // },
  {
    path: 'userDetail',
    component: UserDetailComponent,
  },
];
