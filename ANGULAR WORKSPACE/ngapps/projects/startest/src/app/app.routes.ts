import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    data: { animation: 'isLeft' },
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./post/post.component').then((m) => m.PostComponent),
    data: { animation: 'isRight' },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
    data: { animation: 'isLeft' },
  },
  {
    path: 'classdem',
    loadComponent: () =>
      import('./classdem/classdem.component').then((m) => m.ClassdemComponent),
    data: { animation: 'isRight' },
  },
  {
    path: 'evtbind',
    loadComponent: () =>
      import('./evntbind/evntbind.component').then((m) => m.EvntbindComponent),
    data: { animation: 'isLeft' },
  },
  {
    path: 'tempform',
    loadComponent: () =>
      import('./templtform/templtform.component').then(
        (m) => m.TempltformComponent
      ),
    data: { animation: 'isRight' },
  },
  {
    path: 'reactform',
    loadComponent: () =>
      import('./reactform/reactform.component').then(
        (m) => m.ReactformComponent
      ),
    data: { animation: 'isLeft' },
  },
];
