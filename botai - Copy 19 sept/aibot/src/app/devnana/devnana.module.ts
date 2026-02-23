import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DeviMaaComponent } from './devi-maa/devi-maa.component';
import { HttpClientModule } from '@angular/common/http';
import { PromiseDemoComponent } from './rx/promise-demo/promise-demo.component';
import { FromEventDemoComponent } from './rx/from-event-demo/from-event-demo.component';
import { IntervalDemoComponent } from './rx/interval-demo/interval-demo.component';
import { OfFromDemoComponent } from './rx/of-from-demo/of-from-demo.component';
import { ToArrayDemoComponent } from './rx/to-array-demo/to-array-demo.component';
import { PluckDemoComponent } from './rx/pluck-demo/pluck-demo.component';
import { SubjectDemoComponent } from './rx/subject-demo/subject-demo.component';

import { TstinngintrComponent } from './tstinngintr/tstinngintr.component';
import { ChangebgColorDirective } from './directives/changebg-color.directive';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { HasPerissionDirective } from './directives/has-perission.directive';
import { ObservdmoComponent } from './rx/observdmo/observdmo.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OnlyLetterDirective } from './only-letter.directive';

//
@NgModule({
  declarations: [
    LoginComponent,
    DeviMaaComponent,
    PromiseDemoComponent,
    FromEventDemoComponent,
    IntervalDemoComponent,
    OfFromDemoComponent,
    ChangebgColorDirective,
    ToArrayDemoComponent,
    PluckDemoComponent,
    SubjectDemoComponent,
    TstinngintrComponent,
    NumberonlyDirective,
    HasPerissionDirective,
    ObservdmoComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    OnlyLetterDirective,
  ],

  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [LoginComponent, DeviMaaComponent],
})
export class DevnanaModule {}
