import { Component, Input, OnInit, Output} from '@angular/core';


@Component({
    selector: 'data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['../../styles/_data-binding.scss']
})



export class DataBindingComponent {
    
    sentPerson: object; 
    receivedRandomNumber : number;
    receivedNumberOfPeople: number;

    constructor(){
       
 
    }

    ngOnInit(){
        console.clear()
    }

    submitForm(myForm) {
        this.sentPerson = myForm.value;
        //console.log(this.sentPerson)
        myForm.reset()
        
    }

    receiveNumberOfPeople(number: number):void{
        this.receivedNumberOfPeople=number;
    }

    receiveRandomNumber(number: number):void{
        
        this.receivedRandomNumber=number;
    }

    clearForm(myForm){
        myForm.reset()
    }

    
}
