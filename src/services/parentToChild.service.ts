import { Injectable } from '@angular/core';
import { Person } from '../classes/Person';
import { DataBindingChildComponent } from '../app/communication-child/communication-child.component'

@Injectable( )
export class ParentToChildService{

    private currentPerson : Person;
    constructor(private child: DataBindingChildComponent){}

    sendData(person: Person){
        this.child.people.push(person)
    }
}