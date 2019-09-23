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
// import { LazyComponent } from './lazy-loading/lazy.component';
import { CommunicationParentComponent } from './communication-parent/communication-parent.component';
import { DataBindingChildComponent } from './communication-child/communication-child.component';
import { UrlParamsComponent } from './url-params/url-params.component';
import { ClassesComponent } from './classes/classes.component';
import { ChartComponent } from './chart/chart.component';
// import { CrudComponent } from './crud/crud.component';



//Services
import { ListService } from '../services/list.service'; 
import { ChuckService } from '../services/chuck.service'; 
import { NasaService } from '../services/nasa.service'; 
import { ParentToChildService } from "../services/parentToChild.service";

//Pipes

import { LeetPipe } from '../app/pipes/catalogue/leet.pipe';
import { AlternatePipe } from '../app/pipes/catalogue/alternate.pipe';
import { ReversePipe } from '../app/pipes/catalogue/reverse.pipe';
import { UrlParamsIdComponent } from './url-params-id/url-params-id.component';
//import { ReactiveComponent } from './reactive-form/reactive-form.component';
// import { LiteratePipe } from './pipes/catalogue/literate.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    MovieComponent,
    ChuckComponent,
    // LazyComponent,
    // NasaDataComponent,
    // NasaImgComponent,
    DataBindingChildComponent,
    CommunicationParentComponent,
    PipesComponent,
    LeetPipe,
    ReversePipe,
    AlternatePipe,
    // LiteratePipe,
    UrlParamsComponent,
    UrlParamsIdComponent,
    ClassesComponent,
    ChartComponent,
    //ReactiveComponent,
    // CrudComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
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
    ParentToChildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
