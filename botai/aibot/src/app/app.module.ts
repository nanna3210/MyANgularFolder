import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NannadiComponent } from './nannadi/nannadi.component';
import { ColordirectiveDirective } from './mydirctvs/colordirective.directive';
import { NumberdDirective } from './mydirctvs/numberd.directive';
import { NumbdDirective } from './mydirctvs/numbd.directive';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NannadiComponent,
    ColordirectiveDirective,
    NumberdDirective,
    NumbdDirective,
    UserFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
