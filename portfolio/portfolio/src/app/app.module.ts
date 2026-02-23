import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModule } from './app-module/mat.module';
import { HeaderMatComponent } from './maty/header-mat/header-mat.component';
import { FooterMatComponent } from './maty/footer-mat/footer-mat.component';
import { MatyAllComponent } from './maty/maty-all/maty-all.component';
import { SocialLinksComponent } from './maty/social-links/social-links.component';
import { MatyoptionComponent } from './maty/matyoption/matyoption.component';

@NgModule({
  declarations: [AppComponent,  HeaderMatComponent, FooterMatComponent, MatyAllComponent, SocialLinksComponent, MatyoptionComponent],
  imports: [
    BrowserModule,
    MatModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
