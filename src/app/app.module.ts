import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EnvServiceProvider } from '../services/env.service.provider';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { MovieComponent } from './movie/movie.component';
import { ChuckComponent } from './chuck/chuck.component';
import { LazyComponent } from './lazy-loading/lazy.component';
import { NasaDataComponent } from './nasa-data/nasa-data.component';
import { NasaImgComponent } from './nasa-img/nasa-img.component';
import { DataBindingComponent } from './data-binding/data-binding.component'
import { DataBindingChildComponent } from './data-binding-child/data-binding-child.component'
import { ListService } from '../services/list.service'; 
import { ChuckService } from '../services/chuck.service'; 
import { NasaService } from '../services/nasa.service'; 

import { FormsModule }   from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    MovieComponent,
    ChuckComponent,
    LazyComponent,
    NasaDataComponent,
    NasaImgComponent,
    DataBindingChildComponent,
    DataBindingComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ ListService, ChuckService, NasaService, EnvServiceProvider,],
  bootstrap: [AppComponent]
})
export class AppModule { }
