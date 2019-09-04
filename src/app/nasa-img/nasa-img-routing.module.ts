import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaImgComponent } from '../nasa-img/nasa-img.component';

const routes: Routes = [
  {
    path: "/img",
    component: NasaImgComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaImgRoutingModule { }
