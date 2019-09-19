import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CrudComponent} from './crud.component';
import { CrudRoutingModule } from '../crud/crud_routing.module';



@NgModule({
    imports: [CommonModule, CrudRoutingModule],
    declarations: [CrudComponent]
  })
  export class CrudModule {
      
  }