// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DataBindingChildModule } from '../communication-child/communication-child.module';

// This Module's Components
import { CommunicationParentComponent } from './communication-parent.component';


@NgModule({
    imports: [
        BrowserModule, FormsModule , 
    ],
    declarations: [
        
        
    ],
    exports: [
        CommunicationParentComponent,
    ]
})
export class CommunicationParentModule {

}
