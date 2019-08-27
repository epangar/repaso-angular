import { Component, 
        OnInit, Input, Output, 
        EventEmitter, 
        OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Person } from '../../classes/Person';


@Component({
    selector: 'data-binding-child',
    templateUrl: 'data-binding-child.component.html',
    styleUrls: ['../../styles/_data-binding-child.component.scss']
})
export class DataBindingChildComponent {
    
    randomNumber: number;
    

    constructor() {
        
    }

    private _sentPerson={}
    private _people=[]

    @Input() 
    
    set sentPerson(sentPerson: Person) {
        debugger
        this._sentPerson=sentPerson;
        console.log(this)
        
        console.log(this.people)
    };

    get sentPerson(): Person {
        return this._sentPerson;
    }

    @Input() 
    
    set people(people : Array<Person>) {
        debugger
        this._people=people;
        console.log(this);
        this._people.push(this._sentPerson);
    }

    get people(): Array<Person> {
        return this._people;
    }

   
    
    @Output() randomNumberToEmit: EventEmitter<number> = new EventEmitter<number>();
    @Output() numberOfPeople: EventEmitter<number> = new EventEmitter<number>();


    ngOnInit() {
        console.log(this)
        this._sentPerson={}
        this._people=[];
        
        //(this.emitNumber());
    }

    



    personTracker(index: number, person: any){
        return person.id;
    }

    ngOnChanges(changes: SimpleChanges){
        
        console.log(this);
        (this.emitNumber());
        
    }

    emitLength(){
        this.numberOfPeople.emit(this.people.length)
    }
    emitNumber(){
        
         if(this.people.length>1){
            this.randomNumber = Math.floor(Math.random()*100);
            console.log(this.randomNumber)
            this.randomNumberToEmit.emit(this.randomNumber)
         }
        
    }
    
}
