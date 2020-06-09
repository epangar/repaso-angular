import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { NasaDataComponent } from '../nasa-data/nasa-data.component';
import { NasaImgComponent } from '../nasa-img/nasa-img.component';

@NgModule({
    imports: [
      CommonModule, 
      LazyRoutingModule
    ],

    declarations: [
      LazyComponent, 
      NasaDataComponent, 
      NasaImgComponent
    ]
  })
  export class LazyLoadingModule {
      
  }