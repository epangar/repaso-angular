import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EnvServiceProvider } from '../services/env.service.provider';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


//Components
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { MovieComponent } from './movie/movie.component';
import { ChuckComponent } from './chuck/chuck.component';
import { PipesComponent } from './pipes/pipes.component';
// import { CommunicationParentComponent } from './communication-parent/communication-parent.component';
// import { DataBindingChildComponent } from './communication-child/communication-child.component';
import { UrlParamsComponent } from './url-params/url-params.component';
import { ClassesComponent } from './classes/classes.component';
import { ChartComponent } from './chart/chart.component';
import { UrlParamsIdComponent } from './url-params-id/url-params-id.component';
//import { LazyComponent } from './lazy-loading/lazy.component';
//import { RandomJokeComponent } from './random-joke/random-joke.component';
//import { ReactiveComponent } from './reactive-form/reactive-form.component';
//import { CrudComponent } from './crud/crud.component';



//Services
import { ListService } from '../services/list.service'; 
import { ChuckService } from '../services/chuck.service'; 
import { NasaService } from '../services/nasa.service'; 
import { RandomJokeService } from "../services/random-joke.service";

//Pipes

import { LeetPipe } from '../app/pipes/catalogue/leet.pipe';
import { AlternatePipe } from '../app/pipes/catalogue/alternate.pipe';
import { ReversePipe } from '../app/pipes/catalogue/reverse.pipe';
import { LiteratePipe } from './pipes/catalogue/literate.pipe';
import { ReactiveSiblingsComponent } from './reactive-siblings/reactive-siblings.component';
import { FirstSiblingComponent } from './first-sibling/first-sibling.component';
import { SecondSiblingComponent } from './second-sibling/second-sibling.component';






@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    MovieComponent,
    ChuckComponent,
    // LazyComponent,
    // NasaDataComponent,
    // NasaImgComponent,
    //DataBindingChildComponent,
    //CommunicationParentComponent,
    PipesComponent,
    LeetPipe,
    ReversePipe,
    AlternatePipe,
    LiteratePipe,
    UrlParamsComponent,
    UrlParamsIdComponent,
    ClassesComponent,
    ChartComponent,
    //ReactiveSiblingsComponent,
    // FirstSiblingComponent,
    // SecondSiblingComponent,
    //RandomJokeComponent,
    //ReactiveComponent,
    // CrudComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    //CommunicationParentModule,
    ReactiveFormsModule
    
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [ 
    ListService, 
    ChuckService, 
    NasaService, 
    EnvServiceProvider, 
    RandomJokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
