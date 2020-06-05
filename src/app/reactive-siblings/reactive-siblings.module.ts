import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveSiblingsComponent } from './reactive-siblings.component';
import { ReactiveSiblingsRoutingModule } from '../reactive-siblings/reactive-siblings-routing.module';
import { FirstSiblingComponent } from '../first-sibling/first-sibling.component';
import { SecondSiblingComponent } from '../second-sibling/second-sibling.component';


@NgModule({
    imports: [CommonModule, ReactiveSiblingsRoutingModule],
    declarations: [
      ReactiveSiblingsComponent, 
      FirstSiblingComponent, SecondSiblingComponent]
  })
  export class ReactiveSiblingsModule {
      
  }