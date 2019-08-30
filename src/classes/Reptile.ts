import { Animal } from './Animal';

export class Reptile extends Animal {
    constructor(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn){
        hasLegs=hasLegs,
        numberOfLegs=numberOfLegs,
        hasHair=false,
        hasScales=true,
        canFly=false,
        livesOn=livesOn,
        super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
       
    }   
}