import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ChuckComponent } from './chuck/chuck.component';
import { LazyComponent } from './lazy-loading/lazy.component';
import { ScreenComponent } from './screen/screen.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [

  {path: "", redirectTo: "/home", pathMatch: 'full' },
  {path: "home", component: ScreenComponent },
  {path: "movies", component: MovieComponent},
  {path: "chuck", component: ChuckComponent},
  {path: "lazy", component: LazyComponent},
  {path: "data-binding", component: DataBindingComponent},
  {path: "pipes", component: PipesComponent},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routes: any;
}
