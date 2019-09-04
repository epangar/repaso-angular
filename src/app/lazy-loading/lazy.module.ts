import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyComponent } from './lazy.component';
import { NasaDataRoutingModule } from '../nasa-data/nasa-data-routing.module';
import { NasaImgRoutingModule } from '../nasa-img/nasa-img-routing.module';


@NgModule({
    imports: [CommonModule, NasaDataRoutingModule, NasaImgRoutingModule],
    declarations: []
  })
  export class PostsModule {}