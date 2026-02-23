import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { CommonModule } from '@angular/common';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NannaDemoComponent } from './nanna-demo/nanna-demo.component';
import { NannaDemoChildComponent } from './nanna-demo-child/nanna-demo-child.component';

import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NannaValidComponent } from './nanna-valid/nanna-valid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NannatestComponent } from './nannatest/nannatest.component';

// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    IfdemoComponent,
    ForDemoComponent,
    ClassBindComponent,
    EventBindComponent,
    ShoppingCartComponent,
    ParentComponent,
    ChildComponent,
    NannaDemoComponent,
    NannaDemoChildComponent,
    TemplateFormComponent,
    NannaValidComponent,
    NannatestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
