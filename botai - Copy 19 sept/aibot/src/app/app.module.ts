import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MahadevComponent } from './divine/mahadev/mahadev.component';
import { DevnanaModule } from './devnana/devnana.module';

@NgModule({
  declarations: [AppComponent, MahadevComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, DevnanaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
