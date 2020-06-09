import { Component, 
    OnInit, Input, Output, 
    EventEmitter, 
    OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Person } from '../../classes/Person';


@Component({
selector: 'communication-child',
templateUrl: 'communication-child.component.html',
styleUrls: ['../../styles/_communication-child.scss']
})

export class DataBindingChildComponent implements OnInit{

randomNumber: number;
_receivedPerson: Person;
people: Person[] = [];

constructor() {
    
}



@Input() 

set receivedPerson(sentPerson: Person){
    
    
    this.people.push(sentPerson);
    if(this.people.includes(undefined)){
        this.people=this.people.filter(e=>e!==undefined)
    }
    (this.emitLength())
}

get receivedPerson(){
    
    return this.people;
}




@Output() randomNumberToEmit: EventEmitter<number> = new EventEmitter<number>();
@Output() numberOfPeople: EventEmitter<number> = new EventEmitter<number>();


ngOnInit() {
    
    (this.emitLength())
}



delete(person: Person){
    this.people=this.people.filter(p=>p!==person);

    (this.emitLength());
}

personTracker(index: number, person: any){
    return person.id;
}



emitLength(){
    
    this.numberOfPeople.emit(this.people.length)
}

emitNumber(){

        this.randomNumber = Math.floor(Math.random()*100);
        
        this.randomNumberToEmit.emit(this.randomNumber)

}

}