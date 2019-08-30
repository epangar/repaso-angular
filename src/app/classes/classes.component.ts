import { Component, OnInit } from '@angular/core';
import { Animal } from '../../classes/Animal';
import { Bat } from '../../classes/Bat';
import { Bird } from '../../classes/Bird';
import { Crocodile } from '../../classes/Crocodile';
import { Eagle } from '../../classes/Eagle';
import { Kiwi } from '../../classes/Kiwi';
import { Mammal } from '../../classes/Mammal';
import { Reptile } from '../../classes/Reptile';
import { Snake } from '../../classes/Snake';
import { Whale } from '../../classes/Whale';
import { Wolf } from '../../classes/Wolf';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['../../styles/_classes.scss']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear();
    (this.instantiate());
  }

  instantiate(){
    let animal : Animal = new Animal(true, 4, true, false, false, "Earth");
    
    let bat = new Bat();

    let bird: Bird = new Bird(true, 2, false, false, true, "Earth");

    let croc: Crocodile = new Crocodile();

    let eagle: Bird = new Eagle()
    let reptile: Reptile = new Reptile(true, 4, true, false, false, "Earth");

    console.log(animal,bat, bird, croc, eagle, reptile)
  }
}
