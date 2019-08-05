import { Component, OnInit, Input, Output, EventEmitter, OnCanges } from '@angular/core';


@Component({
    selector: 'data-binding-child',
    templateUrl: 'data-binding-child.component.html',
    styleUrls: ['../../styles/_data-binding-child.component.scss']
})
export class DataBindingChildComponent {
   
    
    
    
    // @Input() formName: string;
    // @Input() formSurname: string;
    // @Input() formAge: number;
    // @Input() formEmail: string;

    randomNumber: number;
    @Input() receivedPerson: object;
    @Output() randomNumberToEmit = new EventEmitter<number>()
   
    public people: Array<object> =[];
    

    constructor() {}

    ngOnInit() {
        this.randomNumber = Math.floor(Math.random()*100);
        (this.emmitNumber());
    }

    

    getPerson(receivedPerson: object) {
        this.people.push(receivedPerson)
        console.log(this.people)
        
    }

    personTracker(index: number, person: any){
        return person.id;
    }

    
    emmitNumber(){
        console.log(this.randomNumber)
        this.randomNumberToEmit.emit(this.randomNumber)
    }
    
}
