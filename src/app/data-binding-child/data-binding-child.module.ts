// Angular Imports
import { NgModule } from '@angular/core';
import { ParentToChildService } from '../../services/parentToChild.service'

// This Module's Components
import { DataBindingChildComponent } from './data-binding-child.component';

@NgModule({
    imports: [
        
    ],
    declarations: [
        DataBindingChildComponent,
    ],
    exports: [
        DataBindingChildComponent,
    ],
    providers: [
        DataBindingChildComponent,
    ]
})
export class DataBindingChildModule {

}
