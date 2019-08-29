import { Animal } from './Animal';

export class Mammal extends Animal {
    constructor(public hasLegs: boolean =true,
                public numberOfLegs: number = numberOfLegs,
                public hasHair: boolean = true,
                public hasScales: boolean,
                public canFly: boolean,
                public livesOn: string,
                ){

        super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
        this.hasLegs;
        this.numberOfLegs=numberOfLegs;
        this.hasHair=true;
        this.hasScales=false;
        this.canFly=canFly;
        this.livesOn=livesOn;
    }   
}