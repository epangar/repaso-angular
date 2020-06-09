import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunicationParentComponent } from '../communication-parent/communication-parent.component';
import { DataBindingChildComponent } from '../communication-child/communication-child.component';




const routes: Routes = [
  {
    path: "",
    component: CommunicationParentComponent,
    children : [
      {path: "child", loadChildren: '../communication-child/communication-child.module'},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationParentRoutingModule { }
