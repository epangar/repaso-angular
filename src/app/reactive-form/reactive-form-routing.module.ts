import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent } from '../reactive-form/reactive-form.component';



const routes: Routes = [
  {
    path: "",
    component: ReactiveComponent,
    children : [ ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
