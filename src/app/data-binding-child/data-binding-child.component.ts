import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Person } from '../../classes/Person';


@Component({
    selector: 'data-binding-child',
    templateUrl: 'data-binding-child.component.html',
    styleUrls: ['../../styles/_data-binding-child.component.scss']
})
export class DataBindingChildComponent {
   
    @Input() sentPerson: Person;
    
    @Output() randomNumberToEmit: EventEmitter<number> = new EventEmitter<number>()
    
    randomNumber: number;
    people: Array<Person>=["hola", 2];
    
    constructor() {
        
    }

    
    

    ngOnInit() {
        
        this.people=[]
        
        this.randomNumber = Math.floor(Math.random()*100);
        
        (this.emitNumber());
    }

    

    getPerson(people: object) {
        this.people.push(people)
        console.log(this.people)
        
    }

    personTracker(index: number, person: any){
        return person.id;
    }

    
    emitNumber(){
        
        if(this.people.length>1){
            console.log(this.randomNumber)
            this.randomNumberToEmit.emit(this.randomNumber)
        }
        
    }
    
}
