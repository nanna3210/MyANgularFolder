import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PagelistComponent } from './pagelist/pagelist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { MoredetailsComponent } from './moredetails/moredetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    PagelistComponent,
    NotfoundComponent,
    LoginComponent,
    DetailsComponent,
    ProductsComponent,
    MoredetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
