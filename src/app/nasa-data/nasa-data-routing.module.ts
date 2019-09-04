import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaDataComponent } from '../nasa-data/nasa-data.component';

const routes: Routes = [
  {
    path: "/data",
    component: NasaDataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaDataRoutingModule { }
