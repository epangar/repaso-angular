import { Component, Input, OnInit, Output} from '@angular/core';
import { DataBindingChildComponent } from '../communication-child/communication-child.component';
import { NgModel, NgForm} from '@angular/forms';


@Component({
    selector: 'communication-parent',
    templateUrl: 'communication-parent.component.html',
    styleUrls: ['../../styles/_communication-parent.scss']
})



export class CommunicationParentComponent {
    
    sentPerson: object; 
    receivedRandomNumber : number;
    receivedNumberOfPeople: number;

    constructor(){
       
 
    }

    ngOnInit(){
        console.clear()
    }

    submitForm(myForm: NgForm) {
        
        console.log(myForm)
        this.sentPerson = myForm.value;
        
        myForm.resetForm()
        
    }

    receiveNumberOfPeople(number: number):void{
        this.receivedNumberOfPeople=number;
    }

    receiveRandomNumber(number: number):void{
        
        this.receivedRandomNumber=number;
    }

    clearForm(myForm: NgForm){
        
        myForm.resetForm()
    }

    
}
