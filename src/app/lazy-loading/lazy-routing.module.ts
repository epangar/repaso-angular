import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from '../lazy-loading/lazy.component';
import { NasaDataComponent } from '../nasa-data/nasa-data.component';
import { NasaImgComponent } from '../nasa-img/nasa-img.component';



const routes: Routes = [
  {
    path: "",
    component: LazyComponent,
    children : [
      {path: "data", loadChildren: '../nasa-data/nasa-data.module'},
      {path: "img" , loadChildren: '../nasa-img/nasa-img.module'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
