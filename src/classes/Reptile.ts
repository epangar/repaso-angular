import { Animal } from './Animal';

export class Reptile extends Animal {
    constructor(public hasLegs: boolean=hasLegs,
                public numberOfLegs: number=numberOfLegs,
                public hasHair: boolean=false,
                public hasScales: boolean=true,
                public canFly: boolean=false,
                public livesOn: string=livesOn,
                ){

        super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
       
    }   
}