// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';



// This Module's Components
import { DataBindingChildComponent } from './communication-child.component';

@NgModule({
    imports: [
        BrowserModule, FormsModule, DataBindingChildComponent     
    ],
    declarations: [
        DataBindingChildComponent
    ],
    exports: [
        DataBindingChildComponent,
    ],
    providers: [
        //DataBindingChildComponent,
    ]
})
export class DataBindingChildModule {

}
