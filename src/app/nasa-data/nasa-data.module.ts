import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaDataRoutingModule } from './nasa-data-routing.module';
import { NasaDataComponent } from './nasa-data.component';

@NgModule({
  declarations: [
    //NasaDataComponent
  ],
  imports: [
    CommonModule,
    NasaDataRoutingModule
  ]
})
export class NasaDataModule { }
