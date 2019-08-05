import { Component, Input, OnInit, Output} from '@angular/core';


@Component({
    selector: 'data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['../../styles/_data-binding.scss']
})


export class DataBindingComponent {
    
    @Input() randomNumberToEmit : number;
    sentPerson: object; 
    receivedRandomNumber : number;

    constructor(){
        
        
    }

    ngOnInit(){
        
    }

    submitForm(myForm: any) {
        this.sentPerson = myForm.value;
        console.log(this.sentPerson)
        
    }

    receiveRandomNumber(number: number):void{
        this.receivedRandomNumber=number;
    }

    

    
}
