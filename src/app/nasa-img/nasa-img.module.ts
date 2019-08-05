import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaImgRoutingModule } from './nasa-img-routing.module';
import { NasaImgComponent } from './nasa-img.component';

@NgModule({
  declarations: [NasaImgComponent],
  imports: [
    CommonModule,
    NasaImgRoutingModule
  ]
})
export class NasaImgModule { }
