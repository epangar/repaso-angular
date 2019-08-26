import { Component, Input, OnInit, Output} from '@angular/core';
import { ParentToChildService } from '../../services/parentToChild.service';
import { DataBindingChildComponent } from '../data-binding-child/data-binding-child.component';


@Component({
    selector: 'data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['../../styles/_data-binding.scss']
})



export class DataBindingComponent {
    
    sentPerson: object; 
    receivedRandomNumber : number;

    constructor(private send: ParentToChildService){
        this.send=send;
 
    }

    ngOnInit(){
        console.clear()
    }

    submitForm(myForm: any) {
        this.sentPerson = myForm.value;
        console.log(this.sentPerson)
        
    }

    receiveRandomNumber(number: number):void{
        
        this.receivedRandomNumber=number;
    }

    

    
}
