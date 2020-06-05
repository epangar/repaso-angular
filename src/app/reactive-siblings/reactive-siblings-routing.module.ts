import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveSiblingsComponent } from '../reactive-siblings/reactive-siblings.component';



const routes: Routes = [
  {
    path: "",
    component: ReactiveSiblingsComponent,
    // children : [
    //   {path: "first", loadChildren: '../nasa-data/nasa-data.module'},
    //   {path: "img" , loadChildren: '../nasa-img/nasa-img.module'}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveSiblingsRoutingModule { }
