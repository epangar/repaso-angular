import { Animal } from './Animal';

export class Mammal extends Animal {
    constructor(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn){
        hasLegs = true;
        numberOfLegs=numberOfLegs;
        hasHair=true;
        hasScales=false;
        canFly=canFly;
        livesOn=livesOn;
        super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
        
    }   
}