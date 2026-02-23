import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MahadevComponent } from './divine/mahadev/mahadev.component';
import { PromiseDemoComponent } from './devnana/rx/promise-demo/promise-demo.component';
import { FromEventDemoComponent } from './devnana/rx/from-event-demo/from-event-demo.component';
import { IntervalDemoComponent } from './devnana/rx/interval-demo/interval-demo.component';
import { OfFromDemoComponent } from './devnana/rx/of-from-demo/of-from-demo.component';
import { ToArrayDemoComponent } from './devnana/rx/to-array-demo/to-array-demo.component';
import { PluckDemoComponent } from './devnana/rx/pluck-demo/pluck-demo.component';
import { SubjectDemoComponent } from './devnana/rx/subject-demo/subject-demo.component';
import { TstinngintrComponent } from './devnana/tstinngintr/tstinngintr.component';
import { ObservdmoComponent } from './devnana/rx/observdmo/observdmo.component';
import { TemplateFormComponent } from './devnana/template-form/template-form.component';
import { ReactiveFormComponent } from './devnana/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'angubasic', component: MahadevComponent },
  { path: 'promiseDemo', component: PromiseDemoComponent },
  { path: 'fromEvent', component: FromEventDemoComponent },
  { path: 'intervalDemo', component: IntervalDemoComponent },
  { path: 'ofFromDemo', component: OfFromDemoComponent },
  { path: 'toArrayDemo', component: ToArrayDemoComponent },
  { path: 'pluckDemo', component: PluckDemoComponent },
  { path: 'subjectDemo', component: SubjectDemoComponent },
  { path: 'testingInter', component: TstinngintrComponent },
  { path: 'observerdemo', component: ObservdmoComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
