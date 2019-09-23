import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveComponent } from './reactive-form.component';
import { ReactiveRoutingModule } from '../reactive-form/reactive-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, ReactiveRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [ReactiveComponent]
  })
  export class ReactiveModule {
      
  }