import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomJokeComponent } from '../random-joke/random-joke.component';



const routes: Routes = [
  {
    path: "",
    component: RandomJokeComponent,
    children : [ ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomJokeRoutingModule {
    constructor(){}

    ngOnInit(){
      
    }
}
