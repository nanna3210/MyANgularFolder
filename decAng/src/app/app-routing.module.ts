import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NannaValidComponent } from './nanna-valid/nanna-valid.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'nannaValid', component: NannaValidComponent },
  { path: 'shopping', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
