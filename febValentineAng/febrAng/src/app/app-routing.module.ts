import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagelistComponent } from './pagelist/pagelist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { MoredetailsComponent } from './moredetails/moredetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PagelistComponent },
  { path: 'login', component: LoginComponent },

  { path: 'product/:category', component: ProductsComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
    children: [
      { path: 'moredetails/:productId', component: MoredetailsComponent },
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
