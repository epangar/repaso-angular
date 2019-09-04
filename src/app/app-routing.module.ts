import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ChuckComponent } from './chuck/chuck.component';
import { LazyComponent } from './lazy-loading/lazy.component';
import { NasaDataComponent } from './nasa-data/nasa-data.component';
import { NasaImgComponent } from './nasa-img/nasa-img.component';
import { ScreenComponent } from './screen/screen.component';
import { CommunicationParentComponent } from './communication-parent/communication-parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { UrlParamsComponent } from './url-params/url-params.component';
import { UrlParamsIdComponent } from './url-params-id/url-params-id.component';
import { ClassesComponent } from './classes/classes.component';


const routes: Routes = [

  {path: "", redirectTo: "/home", pathMatch: 'full' },
  {path: "home", component: ScreenComponent },
  {path: "movies", component: MovieComponent},
  {path: "chuck", component: ChuckComponent},
  {path: "comunication", component: CommunicationParentComponent},
  {path: "pipes", component: PipesComponent},
  {path: "url-param", component: UrlParamsComponent},
  {path: "url-param/contact/:id", component: UrlParamsIdComponent},
  {path: "classes", component: ClassesComponent},
  {path: "lazy", loadChildren: './lazy-loading/lazy.module#LazyLoadingModule' },
 
 
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
