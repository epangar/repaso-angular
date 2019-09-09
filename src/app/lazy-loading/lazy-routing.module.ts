import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from '../lazy-loading/lazy.component';



const routes: Routes = [
  {
    path: "",
    component: LazyComponent,
    children : [
      {path:'/data', loadChildren: '../nasa-data/nasa-data.module#NasaDataModule'},
      {path:'img', loadChildren: '../nasa-img/nasa-img.module#NasaImgModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
