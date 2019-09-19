import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from '../crud/crud.component';



const routes: Routes = [
  {
    path: "",
    component: CrudComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CrudRoutingModule { 
  constructor(){}

  ngOnInit(){
    
  }
  
}
