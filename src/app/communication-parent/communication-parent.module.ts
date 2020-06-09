// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';


// This Module's Components
import { CommunicationParentComponent } from './communication-parent.component';
import { CommunicationParentRoutingModule } from './communication-parent-routing.module';
import { DataBindingChildComponent } from '../communication-child/communication-child.component';


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        CommunicationParentRoutingModule
        
    ],
    declarations: [
        CommunicationParentComponent,
        DataBindingChildComponent
    ]
})
export class CommunicationParentModule {

}